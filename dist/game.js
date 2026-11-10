var zc=0,mo=1,kc=2;var go=1,Nr=2,dn=3,En=0,Dt=1,Jt=2,wn=0,ni=1,vo=2,_o=3,xo=4,Vc=5,zn=100,Hc=101,Gc=102,Wc=103,qc=104,Xc=200,Yc=201,$c=202,Zc=203,dr=204,fr=205,Jc=206,Kc=207,jc=208,Qc=209,el=210,tl=211,nl=212,il=213,sl=214,Fr=0,Or=1,Br=2,ii=3,zr=4,kr=5,Vr=6,Hr=7,yo=0,rl=1,al=2,Cn=0,ol=1,cl=2,ll=3,ul=4,hl=5,dl=6,fl=7;var Mo=300,ci=301,li=302,Gr=303,Wr=304,Ns=306,pr=1e3,Bn=1001,mr=1002,Zt=1003,pl=1004;var Fs=1005;var sn=1006,qr=1007;var Xn=1008;var cn=1009,So=1010,bo=1011,Wi=1012,Xr=1013,Yn=1014,fn=1015,qi=1016,Yr=1017,$r=1018,Xi=1020,Eo=35902,To=35899,Ao=1021,wo=1022,Kt=1023,Ni=1026,Yi=1027,Co=1028,Zr=1029,Ro=1030,Jr=1031;var Kr=1033,Os=33776,Bs=33777,zs=33778,ks=33779,jr=35840,Qr=35841,ea=35842,ta=35843,na=36196,ia=37492,sa=37496,ra=37808,aa=37809,oa=37810,ca=37811,la=37812,ua=37813,ha=37814,da=37815,fa=37816,pa=37817,ma=37818,ga=37819,va=37820,_a=37821,xa=36492,ya=36494,Ma=36495,Sa=36283,ba=36284,Ea=36285,Ta=36286;var hs=2300,gr=2301,hr=2302,ro=2400,ao=2401,oo=2402;var ml=3200,gl=3201;var Io=0,vl=1,Rn="",Tt="srgb",si="srgb-linear",ds="linear",et="srgb";var ti=7680;var co=519,_l=512,xl=513,yl=514,Po=515,Ml=516,Sl=517,bl=518,El=519,lo=35044;var Do="300 es",nn=2e3,fs=2001;var Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=1234567,ls=Math.PI/180,Fi=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Lo(i,e){return(i%e+e)%e}function Eu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tu(i,e,t){return i!==e?(t-i)/(e-i):0}function us(i,e,t){return(1-t)*i+t*e}function Au(i,e,t,n){return us(i,e,1-Math.exp(-t*n))}function wu(i,e=1){return e-Math.abs(Lo(i,e*2)-e)}function Cu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pu(i,e){return i+Math.random()*(e-i)}function Du(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(vc=i);let e=vc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uu(i){return i*ls}function Nu(i){return i*Fi}function Fu(i){return(i&i-1)===0&&i!==0}function Ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ui={DEG2RAD:ls,RAD2DEG:Fi,generateUUID:$i,clamp:Xe,euclideanModulo:Lo,mapLinear:Eu,inverseLerp:Tu,lerp:us,damp:Au,pingpong:wu,smoothstep:Cu,smootherstep:Ru,randInt:Iu,randFloat:Pu,randFloatSpread:Du,seededRandom:Lu,degToRad:Uu,radToDeg:Nu,isPowerOfTwo:Fu,ceilPowerOfTwo:Ou,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:zu,normalize:It,denormalize:Li},Ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],v=r[a+2],S=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=S;return}if(d!==S||l!==f||c!==p||u!==v){let g=1-o,h=l*f+c*p+u*v+d*S,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){let C=Math.sqrt(E),A=Math.atan2(C,h*T);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}let b=o*T;if(l=l*g+f*b,c=c*g+p*b,u=u*g+v*b,d=d*g+S*b,g===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*f,e[t+1]=l*v+u*f+c*d-o*p,e[t+2]=c*v+u*p+o*f-l*d,e[t+3]=u*v-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oa=new B,_c=new An,ke=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],v=n[8],S=s[0],g=s[3],h=s[6],T=s[1],E=s[4],b=s[7],C=s[2],A=s[5],P=s[8];return r[0]=a*S+o*T+l*C,r[3]=a*g+o*E+l*A,r[6]=a*h+o*b+l*P,r[1]=c*S+u*T+d*C,r[4]=c*g+u*E+d*A,r[7]=c*h+u*b+d*P,r[2]=f*S+p*T+v*C,r[5]=f*g+p*E+v*A,r[8]=f*h+p*b+v*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=t*d+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return e[0]=d*S,e[1]=(s*c-u*n)*S,e[2]=(o*n-s*a)*S,e[3]=f*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new ke;function Uo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tl(){let i=ps("canvas");return i.style.display="block",i}var xc={};function Oi(i){i in xc||(xc[i]=!0,console.warn(i))}function Al(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){let i={enabled:!0,workingColorSpace:si,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[si]:{primaries:e,whitePoint:n,transfer:ds,toXYZ:yc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:yc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var Je=ku();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mi,vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=ps("canvas")),Mi.width=e.width,Mi.height=e.height;let s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vu=0,Bi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(za(s[a].image)):r.push(za(s[a]))}else r=za(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hu=0,ka=new B,Ut=class i extends Tn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=sn,a=Xn,o=Kt,l=cn,c=i.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=$i(),this.name="",this.source=new Bi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Mo;Ut.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(p+1)/2,C=(h+1)/2,A=(u+f)/4,P=(d+S)/4,L=(v+g)/4;return E>b&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=P/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=L/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-v)*(g-v)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(d-S)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_r=class extends Tn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends _r{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ms=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),$s.subVectors(this.max,rs),Si.subVectors(e.a,rs),bi.subVectors(e.b,rs),Ei.subVectors(e.c,rs),Pn.subVectors(bi,Si),Dn.subVectors(Ei,bi),Kn.subVectors(Si,Ei);let t=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Kn.z,Kn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Kn.z,0,-Kn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Kn.y,Kn.x,0];return!Va(t,Si,bi,Ei,$s)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Si,bi,Ei,$s))?!1:(Zs.crossVectors(Pn,Dn),t=[Zs.x,Zs.y,Zs.z],Va(t,Si,bi,Ei,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_n=[new B,new B,new B,new B,new B,new B,new B,new B],Qt=new B,Ys=new kn,Si=new B,bi=new B,Ei=new B,Pn=new B,Dn=new B,Kn=new B,rs=new B,$s=new B,Zs=new B,jn=new B;function Va(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),u=n.dot(jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Gu=new kn,as=new B,Ha=new B,zi=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Ha)),this.expandByPoint(as.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xn=new B,Ga=new B,Js=new B,Ln=new B,Wa=new B,Ks=new B,qa=new B,gs=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ga.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Ga);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=Ln.dot(this.direction),l=-Ln.dot(Js),c=Ln.lengthSq(),u=Math.abs(1-a*a),d,f,p,v;if(u>0)if(d=a*l-o,f=a*o-l,v=r*u,d>=0)if(f>=-v)if(f<=v){let S=1/u;d*=S,f*=S,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ga).addScaledVector(Js,f),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){Wa.subVectors(t,e),Ks.subVectors(n,e),qa.crossVectors(Wa,Ks);let a=this.direction.dot(qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);let l=o*this.direction.dot(Ks.crossVectors(Ln,Ks));if(l<0)return null;let c=o*this.direction.dot(Wa.cross(Ln));if(c<0||l+c>a)return null;let u=-o*Ln.dot(qa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,f,p,v,S,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,f,p,v,S,g)}set(e,t,n,s,r,a,o,l,c,u,d,f,p,v,S,g){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,v=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,v=c*u,S=c*d;t[0]=f+S*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,v=c*u,S=c*d;t[0]=f-S*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*d,v=o*u,S=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*u,t[4]=S-f*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=f-S*d}else if(e.order==="XZY"){let f=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+S,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wu,e,qu)}lookAt(e,t,n){let s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Un.crossVectors(n,zt),Un.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Un.crossVectors(n,zt)),Un.normalize(),js.crossVectors(zt,Un),s[0]=Un.x,s[4]=js.x,s[8]=zt.x,s[1]=Un.y,s[5]=js.y,s[9]=zt.y,s[2]=Un.z,s[6]=js.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],v=n[2],S=n[6],g=n[10],h=n[14],T=n[3],E=n[7],b=n[11],C=n[15],A=s[0],P=s[4],L=s[8],M=s[12],y=s[1],I=s[5],U=s[9],G=s[13],X=s[2],J=s[6],Y=s[10],ae=s[14],q=s[3],le=s[7],me=s[11],ge=s[15];return r[0]=a*A+o*y+l*X+c*q,r[4]=a*P+o*I+l*J+c*le,r[8]=a*L+o*U+l*Y+c*me,r[12]=a*M+o*G+l*ae+c*ge,r[1]=u*A+d*y+f*X+p*q,r[5]=u*P+d*I+f*J+p*le,r[9]=u*L+d*U+f*Y+p*me,r[13]=u*M+d*G+f*ae+p*ge,r[2]=v*A+S*y+g*X+h*q,r[6]=v*P+S*I+g*J+h*le,r[10]=v*L+S*U+g*Y+h*me,r[14]=v*M+S*G+g*ae+h*ge,r[3]=T*A+E*y+b*X+C*q,r[7]=T*P+E*I+b*J+C*le,r[11]=T*L+E*U+b*Y+C*me,r[15]=T*M+E*G+b*ae+C*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],S=e[7],g=e[11],h=e[15];return v*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+S*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+g*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],S=e[13],g=e[14],h=e[15],T=d*g*c-S*f*c+S*l*p-o*g*p-d*l*h+o*f*h,E=v*f*c-u*g*c-v*l*p+a*g*p+u*l*h-a*f*h,b=u*S*c-v*d*c+v*o*p-a*S*p-u*o*h+a*d*h,C=v*d*l-u*S*l-v*o*f+a*S*f+u*o*g-a*d*g,A=t*T+n*E+s*b+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=T*P,e[1]=(S*f*r-d*g*r-S*s*p+n*g*p+d*s*h-n*f*h)*P,e[2]=(o*g*r-S*l*r+S*s*c-n*g*c-o*s*h+n*l*h)*P,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*P,e[4]=E*P,e[5]=(u*g*r-v*f*r+v*s*p-t*g*p-u*s*h+t*f*h)*P,e[6]=(v*l*r-a*g*r-v*s*c+t*g*c+a*s*h-t*l*h)*P,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*P,e[8]=b*P,e[9]=(v*d*r-u*S*r-v*n*p+t*S*p+u*n*h-t*d*h)*P,e[10]=(a*S*r-v*o*r+v*n*c-t*S*c-a*n*h+t*o*h)*P,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*P,e[12]=C*P,e[13]=(u*S*s-v*d*s+v*n*f-t*S*f-u*n*g+t*d*g)*P,e[14]=(v*o*s-a*S*s-v*n*l+t*S*l+a*n*g-t*o*g)*P,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*f+t*o*f)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,v=r*d,S=a*u,g=a*d,h=o*d,T=l*c,E=l*u,b=l*d,C=n.x,A=n.y,P=n.z;return s[0]=(1-(S+h))*C,s[1]=(p+b)*C,s[2]=(v-E)*C,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(f+h))*A,s[6]=(g+T)*A,s[7]=0,s[8]=(v+E)*P,s[9]=(g-T)*P,s[10]=(1-(f+S))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ti.set(s[0],s[1],s[2]).length(),a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);let c=1/r,u=1/a,d=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=nn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),v,S;if(l)v=r/(a-r),S=a*r/(a-r);else if(o===nn)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===fs)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=nn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),v,S;if(l)v=1/(a-r),S=a/(a-r);else if(o===nn)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===fs)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ti=new B,en=new dt,Wu=new B(0,0,0),qu=new B(1,1,1),Un=new B,js=new B,zt=new B,Sc=new dt,bc=new An,rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var ki=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xu=0,Ec=new B,Ai=new An,yn=new dt,Qs=new B,os=new B,Yu=new B,$u=new An,Tc=new B(1,0,0),Ac=new B(0,1,0),wc=new B(0,0,1),Cc={type:"added"},Zu={type:"removed"},wi={type:"childadded",child:null},Xa={type:"childremoved",child:null},wt=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new rn,n=new An,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(os,Qs,this.up):yn.lookAt(Qs,os,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(yn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zu),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,$u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new B(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new B,Mn=new B,Ya=new B,Sn=new B,Ci=new B,Ri=new B,Rc=new B,$a=new B,Za=new B,Ja=new B,Ka=new lt,ja=new lt,Qa=new lt,On=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),Mn.subVectors(n,t),Ya.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(Mn),l=tn.dot(Ya),c=Mn.dot(Mn),u=Mn.dot(Ya),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ka.setScalar(0),ja.setScalar(0),Qa.setScalar(0),Ka.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ka,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(Qa,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ci.subVectors(s,n),Ri.subVectors(r,n),$a.subVectors(e,n);let l=Ci.dot($a),c=Ri.dot($a);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,s);let u=Ci.dot(Za),d=Ri.dot(Za);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ci,a);Ja.subVectors(e,r);let p=Ci.dot(Ja),v=Ri.dot(Ja);if(v>=0&&p<=v)return t.copy(r);let S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ri,o);let g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Rc.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(Rc,o);let h=1/(g+S+f);return a=S*h,o=f*h,t.copy(n).addScaledVector(Ci,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},er={h:0,s:0,l:0};function eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Lo(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=eo(a,r,e+1/3),this.g=eo(a,r,e),this.b=eo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Je.workingToColorSpace(Et.copy(this),e),Math.round(Xe(Et.r*255,0,255))*65536+Math.round(Xe(Et.g*255,0,255))*256+Math.round(Xe(Et.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Tt){Je.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(er);let n=us(Nn.h,er.h,t),s=us(Nn.s,er.s,t),r=us(Nn.l,er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new We;We.NAMES=wl;var Ju=0,Vn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=ni,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new B,tr=new Ge,Ku=0,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}};var vs=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _s=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ju=0,$t=new dt,to=new wt,Ii=new B,kt=new kn,cs=new kn,yt=new B,an=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?_s:vs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(kt.min,cs.min),kt.expandByPoint(yt),yt.addVectors(kt.max,cs.max),kt.expandByPoint(yt)):(kt.expandByPoint(cs.min),kt.expandByPoint(cs.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),yt.add(Ii)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new B,l[L]=new B;let c=new B,u=new B,d=new B,f=new Ge,p=new Ge,v=new Ge,S=new B,g=new B;function h(L,M,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(f),v.sub(f);let I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),o[L].add(S),o[M].add(S),o[y].add(S),l[L].add(g),l[M].add(g),l[y].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){let y=T[L],I=y.start,U=y.count;for(let G=I,X=I+U;G<X;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let E=new B,b=new B,C=new B,A=new B;function P(L){C.fromBufferAttribute(s,L),A.copy(C);let M=o[L];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),b.crossVectors(A,M);let I=b.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,M=T.length;L<M;++L){let y=T[L],I=y.start,U=y.count;for(let G=I,X=I+U;G<X;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){let v=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,v=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new Vt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ic=new dt,Qn=new gs,nr=new zi,Pc=new B,ir=new B,sr=new B,rr=new B,no=new B,ar=new B,Dc=new B,or=new B,gt=class extends wt{constructor(e=new an,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(no.fromBufferAttribute(d,e),a?ar.addScaledVector(no,u):ar.addScaledVector(no.sub(t),u))}t.add(ar)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(nr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(nr,Pc)===null||Qn.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){let g=f[v],h=a[g.materialIndex],T=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let b=T,C=E;b<C;b+=3){let A=o.getX(b),P=o.getX(b+1),L=o.getX(b+2);s=cr(this,h,e,n,c,u,d,A,P,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=v,h=S;g<h;g+=3){let T=o.getX(g),E=o.getX(g+1),b=o.getX(g+2);s=cr(this,a,e,n,c,u,d,T,E,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){let g=f[v],h=a[g.materialIndex],T=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=T,C=E;b<C;b+=3){let A=b,P=b+1,L=b+2;s=cr(this,h,e,n,c,u,d,A,P,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=v,h=S;g<h;g+=3){let T=g,E=g+1,b=g+2;s=cr(this,a,e,n,c,u,d,T,E,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Qu(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===En,o),l===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(or);return c<t.near||c>t.far?null:{distance:c,point:or.clone(),object:i}}function cr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);let u=Qu(i,e,t,n,ir,sr,rr,Dc);if(u){let d=new B;On.getBarycoord(Dc,ir,sr,rr,d),s&&(u.uv=On.getInterpolatedAttribute(s,o,l,c,d,new Ge)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,l,c,d,new Ge)),a&&(u.normal=On.getInterpolatedAttribute(a,o,l,c,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};On.getNormal(ir,sr,rr,f.normal),u.face=f,u.barycoord=d}return u}var Gn=class i extends an{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2));function v(S,g,h,T,E,b,C,A,P,L,M){let y=b/P,I=C/L,U=b/2,G=C/2,X=A/2,J=P+1,Y=L+1,ae=0,q=0,le=new B;for(let me=0;me<Y;me++){let ge=me*I-G;for(let ze=0;ze<J;ze++){let Ke=ze*y-U;le[S]=Ke*T,le[g]=ge*E,le[h]=X,c.push(le.x,le.y,le.z),le[S]=0,le[g]=0,le[h]=A>0?1:-1,u.push(le.x,le.y,le.z),d.push(ze/P),d.push(1-me/L),ae+=1}}for(let me=0;me<L;me++)for(let ge=0;ge<P;ge++){let ze=f+ge+J*me,Ke=f+ge+J*(me+1),Qe=f+(ge+1)+J*(me+1),$e=f+(ge+1)+J*me;l.push(ze,Ke,$e),l.push(Ke,Qe,$e),q+=6}o.addGroup(p,q,M),p+=q,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=hi(i[t]);for(let s in n)e[s]=n[s]}return e}function eh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function No(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Cl={clone:hi,merge:Ct},th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=eh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xs=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=new B,Lc=new Ge,Uc=new Ge,At=class extends xs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Uc),t.subVectors(Uc,Lc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pi=-90,Di=1,yr=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(Pi,Di,e,t);s.layers=this.layers,this.add(s);let r=new At(Pi,Di,e,t);r.layers=this.layers,this.add(r);let a=new At(Pi,Di,e,t);a.layers=this.layers,this.add(a);let o=new At(Pi,Di,e,t);o.layers=this.layers,this.add(o);let l=new At(Pi,Di,e,t);l.layers=this.layers,this.add(l);let c=new At(Pi,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},ys=class extends Ut{constructor(e=[],t=ci,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ys(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:wn});r.uniforms.tEquirect.value=t;let a=new gt(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new yr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Pt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ih={type:"move"},Vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let g=t.getJointPose(S,n),h=this._getHandJoint(c,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ih)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ms=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ss=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var io=new B,sh=new B,rh=new ke,un=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=io.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rh.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ei=new zi,ah=new Ge(.5,.5),lr=new B,Hi=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],p=r[7],v=r[8],S=r[9],g=r[10],h=r[11],T=r[12],E=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,h-v,C-T).normalize(),s[1].setComponents(c+a,p+u,h+v,C+T).normalize(),s[2].setComponents(c+o,p+d,h+S,C+E).normalize(),s[3].setComponents(c-o,p-d,h-S,C-E).normalize(),n)s[4].setComponents(l,f,g,b).normalize(),s[5].setComponents(c-l,p-f,h-g,C-b).normalize();else if(s[4].setComponents(c-l,p-f,h-g,C-b).normalize(),t===nn)s[5].setComponents(c+l,p+f,h+g,C+b).normalize();else if(t===fs)s[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);let t=ah.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(lr.x=s.normal.x>0?e.max.x:e.min.x,lr.y=s.normal.y>0?e.max.y:e.min.y,lr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Es=class extends Ut{constructor(e,t,n=Yn,s,r,a,o=Zt,l=Zt,c,u=Ni,d=1){if(u!==Ni&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ts=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var As=class i extends an{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,u=new Ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gi=class i extends an{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],v=0,S=[],g=n/2,h=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function T(){let b=new B,C=new B,A=0,P=(t-e)/n;for(let L=0;L<=r;L++){let M=[],y=L/r,I=y*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,X=G*l+o,J=Math.sin(X),Y=Math.cos(X);C.x=I*J,C.y=-y*n+g,C.z=I*Y,d.push(C.x,C.y,C.z),b.set(J,P,Y).normalize(),f.push(b.x,b.y,b.z),p.push(G,1-y),M.push(v++)}S.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){let y=S[M][L],I=S[M+1][L],U=S[M+1][L+1],G=S[M][L+1];(e>0||M!==0)&&(u.push(y,I,G),A+=3),(t>0||M!==r-1)&&(u.push(I,U,G),A+=3)}c.addGroup(h,A,0),h+=A}function E(b){let C=v,A=new Ge,P=new B,L=0,M=b===!0?e:t,y=b===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),v++;let I=v;for(let U=0;U<=s;U++){let X=U/s*l+o,J=Math.cos(X),Y=Math.sin(X);P.x=M*Y,P.y=g*y,P.z=M*J,d.push(P.x,P.y,P.z),f.push(0,y,0),A.x=J*.5+.5,A.y=Y*.5*y+.5,p.push(A.x,A.y),v++}for(let U=0;U<s;U++){let G=C+U,X=I+U;b===!0?u.push(X,X+1,G):u.push(X+1,X,G),L+=3}c.addGroup(h,L,b===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ws=class i extends Gi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class i extends an{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let E=new B,b=new B,C=new B;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],b),p(t[A+2],C),l(E,b,C,T)}function l(T,E,b,C){let A=C+1,P=[];for(let L=0;L<=A;L++){P[L]=[];let M=T.clone().lerp(b,L/A),y=E.clone().lerp(b,L/A),I=A-L;for(let U=0;U<=I;U++)U===0&&L===A?P[L][U]=M:P[L][U]=M.clone().lerp(y,U/I)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){let y=Math.floor(M/2);M%2===0?(f(P[L][y+1]),f(P[L+1][y]),f(P[L][y])):(f(P[L][y+1]),f(P[L+1][y+1]),f(P[L+1][y]))}}function c(T){let E=new B;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(T),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){let T=new B;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let b=g(T)/2/Math.PI+.5,C=h(T)/Math.PI+.5;a.push(b,1-C)}v(),d()}function d(){for(let T=0;T<a.length;T+=6){let E=a[T+0],b=a[T+2],C=a[T+4],A=Math.max(E,b,C),P=Math.min(E,b,C);A>.9&&P<.1&&(E<.2&&(a[T+0]+=1),b<.2&&(a[T+2]+=1),C<.2&&(a[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function p(T,E){let b=T*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function v(){let T=new B,E=new B,b=new B,C=new B,A=new Ge,P=new Ge,L=new Ge;for(let M=0,y=0;M<r.length;M+=9,y+=6){T.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),A.set(a[y+0],a[y+1]),P.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),C.copy(T).add(E).add(b).divideScalar(3);let I=g(C);S(A,y+0,T,I),S(P,y+2,E,I),S(L,y+4,b,I)}}function S(T,E,b,C){C<0&&T.x===1&&(a[E]=T.x-1),b.x===0&&b.z===0&&(a[E]=C/2/Math.PI+.5)}function g(T){return Math.atan2(T.z,-T.x)}function h(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Cs=class i extends Sr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ri=class i extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,p=[],v=[],S=[],g=[];for(let h=0;h<u;h++){let T=h*f-a;for(let E=0;E<c;E++){let b=E*d-r;v.push(b,-T,0),S.push(0,0,1),g.push(E/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<o;T++){let E=T+c*h,b=T+c*(h+1),C=T+1+c*(h+1),A=T+1+c*h;p.push(E,b,A),p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Rs=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var br=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Er=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function oh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tr=class extends ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ro,endingEnd:ro}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ao:r=e,o=2*t-n;break;case oo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ao:a=e,l=2*n-t;break;case oo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),S=v*v,g=S*v,h=-f*g+2*f*S-f*v,T=(1+f)*g+(-1.5-2*f)*S+(-.5+f)*v+1,E=(-1-p)*g+(1.5+p)*S+.5*v,b=p*g-p*S;for(let C=0;C!==o;++C)r[C]=h*a[u+C]+T*a[c+C]+E*a[l+C]+b*a[d+C];return r}},Ar=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},wr=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ht=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ur(t,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ur(e.times,Array),values:ur(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ar(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hs:t=this.InterpolantFactoryMethodDiscrete;break;case gr:t=this.InterpolantFactoryMethodLinear;break;case hr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hs;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return hr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&oh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let v=0;v!==n;++v){let S=t[d+v];if(S!==t[f+v]||S!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ht.prototype.ValueTypeName="";Ht.prototype.TimeBufferType=Float32Array;Ht.prototype.ValueBufferType=Float32Array;Ht.prototype.DefaultInterpolation=gr;var Wn=class extends Ht{constructor(e,t,n){super(e,t,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=hs;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Cr.prototype.ValueTypeName="color";var Rr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Rr.prototype.ValueTypeName="number";var Ir=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Is=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ir(this.times,this.values,this.getValueSize(),e)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Ht{constructor(e,t,n){super(e,t,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=hs;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends Ht{constructor(e,t,n,s){super(e,t,n,s)}};Pr.prototype.ValueTypeName="vector";var Dr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Rl=new Dr,Lr=class{constructor(e){this.manager=e!==void 0?e:Rl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ds=class extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},so=new dt,Nc=new B,Fc=new B,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ls=class extends xs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ho=class extends uo{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new ho}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ur=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Fo="\\[\\]\\.:\\/",ch=new RegExp("["+Fo+"]","g"),Oo="[^"+Fo+"]",lh="[^"+Fo.replace("\\.","")+"]",uh=/((?:WC+[\/:])*)/.source.replace("WC",Oo),hh=/(WCOD+)?/.source.replace("WCOD",lh),dh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oo),fh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oo),ph=new RegExp("^"+uh+hh+dh+fh+"$"),mh=["material","materials","bones","map"],fo=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ch,"")}static parseTrackName(e){let t=ph.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=fo;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eg=new Float32Array(1);var Oc=new dt,oi=class{constructor(e,t,n=0,s=1/0){this.ray=new gs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oc),this}intersectObject(e,t=!0,n=[]){return po(e,this,n,t),n.sort(Bc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)po(e[s],this,n,t);return n.sort(Bc),n}};function Bc(i,e){return i.distance-e.distance}function po(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)po(r[a],e,t,!0)}}function Bo(i,e,t,n){let s=gh(n);switch(t){case Ao:return i*e;case Co:return i*e/s.components*s.byteLength;case Zr:return i*e/s.components*s.byteLength;case Ro:return i*e*2/s.components*s.byteLength;case Jr:return i*e*2/s.components*s.byteLength;case wo:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case Kr:return i*e*4/s.components*s.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zs:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qr:case ta:return Math.max(i,16)*Math.max(e,8)/4;case jr:case ea:return Math.max(i,8)*Math.max(e,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case ya:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sa:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gh(i){switch(i){case cn:case So:return{byteLength:1,components:1};case Wi:case bo:case qi:return{byteLength:2,components:1};case Yr:case $r:return{byteLength:2,components:4};case Yn:case Xr:case fn:return{byteLength:4,components:1};case Eo:case To:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ql(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _h(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){let v=d[f],S=d[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){let S=d[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yh=`#ifdef USE_ALPHAHASH
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
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Th=`#ifdef USE_AOMAP
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
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
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
#endif`,Ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dh=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hh=`#define PI 3.141592653589793
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
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wh=`vec3 transformedNormal = objectNormal;
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
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,vd=`struct PhysicalMaterial {
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
}`,_d=`
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sf=`float getShadowMask() {
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
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ff=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Cf=`#define DISTANCE
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,If=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Nf=`#define LAMBERT
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define MATCAP
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,kf=`#define NORMAL
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
}`,Vf=`#define PHONG
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
}`,Hf=`#define PHONG
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
}`,Gf=`#define STANDARD
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
}`,Wf=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Xf=`#define TOON
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
}`,Yf=`uniform float size;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 color;
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
}`,Kf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:xh,alphahash_pars_fragment:yh,alphamap_fragment:Mh,alphamap_pars_fragment:Sh,alphatest_fragment:bh,alphatest_pars_fragment:Eh,aomap_fragment:Th,aomap_pars_fragment:Ah,batching_pars_vertex:wh,batching_vertex:Ch,begin_vertex:Rh,beginnormal_vertex:Ih,bsdfs:Ph,iridescence_fragment:Dh,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Uh,clipping_planes_pars_fragment:Nh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Oh,color_fragment:Bh,color_pars_fragment:zh,color_pars_vertex:kh,color_vertex:Vh,common:Hh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:qh,displacementmap_vertex:Xh,emissivemap_fragment:Yh,emissivemap_pars_fragment:$h,colorspace_fragment:Zh,colorspace_pars_fragment:Jh,envmap_fragment:Kh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Qh,envmap_pars_vertex:ed,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:cd,lights_lambert_pars_fragment:ld,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:fd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:vd,lights_fragment_begin:_d,lights_fragment_maps:xd,lights_fragment_end:yd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:bd,logdepthbuf_vertex:Ed,map_fragment:Td,map_pars_fragment:Ad,map_particle_fragment:wd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Pd,morphcolor_vertex:Dd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Fd,normal_fragment_maps:Od,normal_pars_fragment:Bd,normal_pars_vertex:zd,normal_vertex:kd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:qd,opaque_fragment:Xd,packing:Yd,premultiplied_alpha_fragment:$d,project_vertex:Zd,dithering_fragment:Jd,dithering_pars_fragment:Kd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:tf,shadowmap_vertex:nf,shadowmask_pars_fragment:sf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:of,skinnormal_vertex:cf,specularmap_fragment:lf,specularmap_pars_fragment:uf,tonemapping_fragment:hf,tonemapping_pars_fragment:df,transmission_fragment:ff,transmission_pars_fragment:pf,uv_pars_fragment:mf,uv_pars_vertex:gf,uv_vertex:vf,worldpos_vertex:_f,background_vert:xf,background_frag:yf,backgroundCube_vert:Mf,backgroundCube_frag:Sf,cube_vert:bf,cube_frag:Ef,depth_vert:Tf,depth_frag:Af,distanceRGBA_vert:wf,distanceRGBA_frag:Cf,equirect_vert:Rf,equirect_frag:If,linedashed_vert:Pf,linedashed_frag:Df,meshbasic_vert:Lf,meshbasic_frag:Uf,meshlambert_vert:Nf,meshlambert_frag:Ff,meshmatcap_vert:Of,meshmatcap_frag:Bf,meshnormal_vert:zf,meshnormal_frag:kf,meshphong_vert:Vf,meshphong_frag:Hf,meshphysical_vert:Gf,meshphysical_frag:Wf,meshtoon_vert:qf,meshtoon_frag:Xf,points_vert:Yf,points_frag:$f,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Kf,sprite_frag:jf},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},pn={basic:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Ct([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Ct([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};pn.physical={uniforms:Ct([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Aa={r:0,b:0,g:0},di=new rn,Qf=new dt;function ep(i,e,t,n,s,r,a){let o=new We(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function v(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function S(E){let b=!1,C=v(E);C===null?h(o,l):C&&C.isColor&&(h(C,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,b){let C=v(b);C&&(C.isCubeTexture||C.mapping===Ns)?(u===void 0&&(u=new gt(new Gn(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:hi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(b.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qf.makeRotationFromEuler(di)),u.material.toneMapped=Je.getTransfer(C.colorSpace)!==et,(d!==C||f!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new gt(new ri(2,2),new on({name:"BackgroundMaterial",uniforms:hi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Je.getTransfer(C.colorSpace)!==et,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,b){E.getRGB(Aa,No(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,b,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:S,addToRenderList:g,dispose:T}}function tp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,I,U,G,X){let J=!1,Y=d(G,U,I);r!==Y&&(r=Y,c(r.object)),J=p(y,G,U,X),J&&v(y,G,U,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(y,I,U,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,I,U){let G=U.wireframe===!0,X=n[y.id];X===void 0&&(X={},n[y.id]=X);let J=X[I.id];J===void 0&&(J={},X[I.id]=J);let Y=J[G];return Y===void 0&&(Y=f(l()),J[G]=Y),Y}function f(y){let I=[],U=[],G=[];for(let X=0;X<t;X++)I[X]=0,U[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,I,U,G){let X=r.attributes,J=I.attributes,Y=0,ae=U.getAttributes();for(let q in ae)if(ae[q].location>=0){let me=X[q],ge=J[q];if(ge===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function v(y,I,U,G){let X={},J=I.attributes,Y=0,ae=U.getAttributes();for(let q in ae)if(ae[q].location>=0){let me=J[q];me===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));let ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),X[q]=ge,Y++}r.attributes=X,r.attributesNum=Y,r.index=G}function S(){let y=r.newAttributes;for(let I=0,U=y.length;I<U;I++)y[I]=0}function g(y){h(y,0)}function h(y,I){let U=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;U[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),X[y]!==I&&(i.vertexAttribDivisor(y,I),X[y]=I)}function T(){let y=r.newAttributes,I=r.enabledAttributes;for(let U=0,G=I.length;U<G;U++)I[U]!==y[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function E(y,I,U,G,X,J,Y){Y===!0?i.vertexAttribIPointer(y,I,U,X,J):i.vertexAttribPointer(y,I,U,G,X,J)}function b(y,I,U,G){S();let X=G.attributes,J=U.getAttributes(),Y=I.defaultAttributeValues;for(let ae in J){let q=J[ae];if(q.location>=0){let le=X[ae];if(le===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){let me=le.normalized,ge=le.itemSize,ze=e.get(le);if(ze===void 0)continue;let Ke=ze.buffer,Qe=ze.type,$e=ze.bytesPerElement,K=Qe===i.INT||Qe===i.UNSIGNED_INT||le.gpuType===Xr;if(le.isInterleavedBufferAttribute){let ee=le.data,xe=ee.stride,Le=le.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)h(q.location+Se,ee.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<q.locationSize;Se++)g(q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Se=0;Se<q.locationSize;Se++)E(q.location+Se,ge/q.locationSize,Qe,me,xe*$e,(Le+ge/q.locationSize*Se)*$e,K)}else{if(le.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)h(q.location+ee,le.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ee=0;ee<q.locationSize;ee++)g(q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ee=0;ee<q.locationSize;ee++)E(q.location+ee,ge/q.locationSize,Qe,me,ge*$e,ge/q.locationSize*ee*$e,K)}}else if(Y!==void 0){let me=Y[ae];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(q.location,me);break;case 3:i.vertexAttrib3fv(q.location,me);break;case 4:i.vertexAttrib4fv(q.location,me);break;default:i.vertexAttrib1fv(q.location,me)}}}}T()}function C(){L();for(let y in n){let I=n[y];for(let U in I){let G=I[U];for(let X in G)u(G[X].object),delete G[X];delete I[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let U in I){let G=I[U];for(let X in G)u(G[X].object),delete G[X];delete I[U]}delete n[y.id]}function P(y){for(let I in n){let U=n[I];if(U[y.id]===void 0)continue;let G=U[y.id];for(let X in G)u(G[X].object),delete G[X];delete U[y.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:g,disableUnusedAttributes:T}}function np(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let S=0;S<d;S++)v+=u[S]*f[S];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ip(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Kt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let L=P===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:C,maxSamples:A}}function sp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new un,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let v=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,h=i.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{let T=r?0:n,E=T*4,b=h.clippingState||null;l.value=b,b=u(v,f,E,p);for(let C=0;C!==E;++C)b[C]=t[C];h.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,v){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=l.value,v!==!0||g===null){let h=p+S*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<h)&&(g=new Float32Array(h));for(let E=0,b=p;E!==S;++E,b+=4)a.copy(d[E]).applyMatrix4(T,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function rp(i){let e=new WeakMap;function t(a,o){return o===Gr?a.mapping=ci:o===Wr&&(a.mapping=li),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gr||o===Wr)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ji=4,Il=[.125,.215,.35,.446,.526,.582],mi=20,zo=new Ls,Pl=new We,ko=null,Vo=0,Ho=0,Go=!1,pi=(1+Math.sqrt(5))/2,Zi=1/pi,Dl=[new B(-pi,Zi,0),new B(pi,Zi,0),new B(-Zi,0,pi),new B(Zi,0,pi),new B(0,pi,-Zi),new B(0,pi,Zi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ap=new B,Ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ap}=r;ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko,Vo,Ho),this._renderer.xr.enabled=Go,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:qi,format:Kt,colorSpace:si,depthBuffer:!1},s=Ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=cp(r,e,t)}return s}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,s,r){let l=new At(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Pl),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new Hn({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new gt(new Gn,S),h=!1,T=e.background;T?T.isColor&&(S.color.copy(T),e.background=null,h=!0):(S.color.copy(Pl),h=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let C=this._cubeSize;wa(s,b*C,E>2?C:0,C,C),d.setRenderTarget(s),h&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ci||e.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dl[(s-r-1)%Dl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new gt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),S=r/v,g=isFinite(r)?1+Math.floor(u*S):mi;g>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mi}`);let h=[],T=0;for(let P=0;P<mi;++P){let L=P/S,M=Math.exp(-L*L/2);h.push(M),P===0?T+=M:P<g&&(T+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/T;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-n;let b=this._sizeLods[s],C=3*b*(s>E-Ji?s-E+Ji:0),A=4*(this._cubeSize-b);wa(t,C,A,3*b,2*b),l.setRenderTarget(t),l.render(d,zo)}};function op(i){let e=[],t=[],n=[],s=i,r=i-Ji+1+Il.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ji?l=Il[a-i+Ji-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,S=3,g=2,h=1,T=new Float32Array(S*v*p),E=new Float32Array(g*v*p),b=new Float32Array(h*v*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,L=A>2?0:-1,M=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];T.set(M,S*v*A),E.set(f,g*v*A);let y=[A,A,A,A,A,A];b.set(y,h*v*A)}let C=new an;C.setAttribute("position",new Vt(T,S)),C.setAttribute("uv",new Vt(E,g)),C.setAttribute("faceIndex",new Vt(b,h)),e.push(C),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ll(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cp(i,e,t){let n=new Float32Array(mi),s=new B(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ul(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Nl(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function lp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Gr||l===Wr,u=l===ci||l===li;if(c||u){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ra(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ra(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function up(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hp(i,e,t,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,v=d.attributes.position,S=0;if(p!==null){let T=p.array;S=p.version;for(let E=0,b=T.length;E<b;E+=3){let C=T[E+0],A=T[E+1],P=T[E+2];f.push(C,A,A,P,P,C)}}else if(v!==void 0){let T=v.array;S=v.version;for(let E=0,b=T.length/3-1;E<b;E+=3){let C=E+0,A=E+1,P=E+2;f.push(C,A,A,P,P,C)}}else return;let g=new(Uo(f)?_s:vs)(f,1);g.version=S;let h=r.get(d);h&&e.remove(h),r.set(d,g)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function dp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),t.update(p,n,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let g=0;for(let h=0;h<v;h++)g+=p[h];t.update(g,n,1)}function d(f,p,v,S){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],S[h]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,S,0,v);let h=0;for(let T=0;T<v;T++)h+=p[T]*S[T];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pp(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;p===!0&&(E=1),v===!0&&(E=2),S===!0&&(E=3);let b=o.attributes.position.count*E,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*C*4*d),P=new ms(A,b,C,d);P.type=fn,P.needsUpdate=!0;let L=E*4;for(let y=0;y<d;y++){let I=g[y],U=h[y],G=T[y],X=b*C*4*y;for(let J=0;J<I.count;J++){let Y=J*L;p===!0&&(s.fromBufferAttribute(I,J),A[X+Y+0]=s.x,A[X+Y+1]=s.y,A[X+Y+2]=s.z,A[X+Y+3]=0),v===!0&&(s.fromBufferAttribute(U,J),A[X+Y+4]=s.x,A[X+Y+5]=s.y,A[X+Y+6]=s.z,A[X+Y+7]=0),S===!0&&(s.fromBufferAttribute(G,J),A[X+Y+8]=s.x,A[X+Y+9]=s.y,A[X+Y+10]=s.z,A[X+Y+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new Ge(b,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function mp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var eu=new Ut,Fl=new Es(1,1),tu=new ms,nu=new xr,iu=new ys,Ol=[],Bl=[],zl=new Float32Array(16),kl=new Float32Array(9),Vl=new Float32Array(4);function ji(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function _p(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function yp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),_t(t,n)}}function Mp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),_t(t,n)}}function Sp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;zl.set(n),i.uniformMatrix4fv(this.addr,!1,zl),_t(t,n)}}function bp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function wp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=Po,r=Fl):r=eu,t.setTexture2D(e||r,s)}function Dp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nu,s)}function Lp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||iu,s)}function Up(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tu,s)}function Np(i){switch(i){case 5126:return gp;case 35664:return vp;case 35665:return _p;case 35666:return xp;case 35674:return yp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return bp;case 35667:case 35671:return Ep;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Cp;case 36295:return Rp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Up}}function Fp(i,e){i.uniform1fv(this.addr,e)}function Op(i,e){let t=ji(e,this.size,2);i.uniform2fv(this.addr,t)}function Bp(i,e){let t=ji(e,this.size,3);i.uniform3fv(this.addr,t)}function zp(i,e){let t=ji(e,this.size,4);i.uniform4fv(this.addr,t)}function kp(i,e){let t=ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vp(i,e){let t=ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hp(i,e){let t=ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gp(i,e){i.uniform1iv(this.addr,e)}function Wp(i,e){i.uniform2iv(this.addr,e)}function qp(i,e){i.uniform3iv(this.addr,e)}function Xp(i,e){i.uniform4iv(this.addr,e)}function Yp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function Zp(i,e){i.uniform3uiv(this.addr,e)}function Jp(i,e){i.uniform4uiv(this.addr,e)}function Kp(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||eu,r[a])}function jp(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nu,r[a])}function Qp(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||iu,r[a])}function em(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tu,r[a])}function tm(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return kp;case 35675:return Vp;case 35676:return Hp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return qp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return $p;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}var qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Np(t.type)}},Xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tm(t.type)}},Yo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Wo=/(\w+)(\])?(\[|\.)?/g;function Hl(i,e){i.seq.push(e),i.map[e.id]=e}function nm(i,e,t){let n=i.name,s=n.length;for(Wo.lastIndex=0;;){let r=Wo.exec(n),a=Wo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hl(t,c===void 0?new qo(o,i,e):new Xo(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Yo(o),Hl(t,d)),t=d}}}var Ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);nm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Gl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var im=37297,sm=0;function rm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wl=new ke;function am(i){Je._getMatrix(Wl,Je.workingColorSpace,i);let e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case ds:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ql(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rm(i.getShaderSource(e),o)}else return r}function om(i,e){let t=am(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cm(i,e){let t;switch(e){case ol:t="Linear";break;case cl:t="Reinhard";break;case ll:t="Cineon";break;case ul:t="ACESFilmic";break;case dl:t="AgX";break;case fl:t="Neutral";break;case hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new B;function lm(){Je.getLuminanceCoefficients(Ca);let i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function hm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vs(i){return i!==""}function Xl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(i){return i.replace(fm,mm)}var pm=new Map;function mm(i,e){let t=He[e];if(t===void 0){let n=pm.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}var gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(gm,vm)}function vm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _m(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===go?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case li:e="ENVMAP_TYPE_CUBE";break;case Ns:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ym(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function Mm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yo:e="ENVMAP_BLENDING_MULTIPLY";break;case rl:e="ENVMAP_BLENDING_MIX";break;case al:e="ENVMAP_BLENDING_ADD";break}return e}function Sm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_m(t),c=xm(t),u=ym(t),d=Mm(t),f=Sm(t),p=um(t),v=hm(r),S=s.createProgram(),g,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vs).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vs).join(`
`),h.length>0&&(h+=`
`)):(g=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),h=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?He.tonemapping_pars_fragment:"",t.toneMapping!==Cn?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),a=$o(a),a=Xl(a,t),a=Yl(a,t),o=$o(o),o=Xl(o,t),o=Yl(o,t),a=$l(a),o=$l(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=T+g+a,b=T+h+o,C=Gl(s,s.VERTEX_SHADER,E),A=Gl(s,s.FRAGMENT_SHADER,b);s.attachShader(S,C),s.attachShader(S,A),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(A)||"",J=U.trim(),Y=G.trim(),ae=X.trim(),q=!0,le=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,C,A);else{let me=ql(s,C,"vertex"),ge=ql(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+J+`
`+me+`
`+ge)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||ae==="")&&(le=!1);le&&(I.diagnostics={runnable:q,programLog:J,vertexShader:{log:Y,prefix:g},fragmentShader:{log:ae,prefix:h}})}s.deleteShader(C),s.deleteShader(A),L=new Ki(s,S),M=dm(s,S)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(S,im)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=A,this}var Em=0,Zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jo(e),t.set(e,n)),n}},Jo=class{constructor(e){this.id=Em++,this.code=e,this.usedTimes=0}};function Tm(i,e,t,n,s,r,a){let o=new ki,l=new Zo,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,I,U,G){let X=U.fog,J=G.geometry,Y=M.isMeshStandardMaterial?U.environment:null,ae=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),q=ae&&ae.mapping===Ns?ae.image.height:null,le=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ge=me!==void 0?me.length:0,ze=0;J.morphAttributes.position!==void 0&&(ze=1),J.morphAttributes.normal!==void 0&&(ze=2),J.morphAttributes.color!==void 0&&(ze=3);let Ke,Qe,$e,K;if(le){let Ze=pn[le];Ke=Ze.vertexShader,Qe=Ze.fragmentShader}else Ke=M.vertexShader,Qe=M.fragmentShader,l.update(M),$e=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);let ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,Se=G.isBatchedMesh===!0,Ve=!!M.map,ft=!!M.matcap,w=!!ae,nt=!!M.aoMap,Ne=!!M.lightMap,Ce=!!M.bumpMap,be=!!M.normalMap,it=!!M.displacementMap,Me=!!M.emissiveMap,Be=!!M.metalnessMap,z=!!M.roughnessMap,Z=M.anisotropy>0,_=M.clearcoat>0,m=M.dispersion>0,R=M.iridescence>0,F=M.sheen>0,W=M.transmission>0,k=Z&&!!M.anisotropyMap,te=_&&!!M.clearcoatMap,j=_&&!!M.clearcoatNormalMap,pe=_&&!!M.clearcoatRoughnessMap,Te=R&&!!M.iridescenceMap,ne=R&&!!M.iridescenceThicknessMap,ue=F&&!!M.sheenColorMap,Re=F&&!!M.sheenRoughnessMap,ye=!!M.specularMap,ce=!!M.specularColorMap,Oe=!!M.specularIntensityMap,D=W&&!!M.transmissionMap,ie=W&&!!M.thicknessMap,oe=!!M.gradientMap,se=!!M.alphaMap,Q=M.alphaTest>0,$=!!M.alphaHash,he=!!M.extensions,Ae=Cn;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Ye={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Qe,defines:M.defines,customVertexShaderID:$e,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Se,batchingColor:Se&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:si,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:ft,envMap:w,envMapMode:w&&ae.mapping,envMapCubeUVHeight:q,aoMap:nt,lightMap:Ne,bumpMap:Ce,normalMap:be,displacementMap:f&&it,emissiveMap:Me,normalMapObjectSpace:be&&M.normalMapType===vl,normalMapTangentSpace:be&&M.normalMapType===Io,metalnessMap:Be,roughnessMap:z,anisotropy:Z,anisotropyMap:k,clearcoat:_,clearcoatMap:te,clearcoatNormalMap:j,clearcoatRoughnessMap:pe,dispersion:m,iridescence:R,iridescenceMap:Te,iridescenceThicknessMap:ne,sheen:F,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:ye,specularColorMap:ce,specularIntensityMap:Oe,transmission:W,transmissionMap:D,thicknessMap:ie,gradientMap:oe,opaque:M.transparent===!1&&M.blending===ni&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:Q,alphaHash:$,combine:M.combine,mapUv:Ve&&S(M.map.channel),aoMapUv:nt&&S(M.aoMap.channel),lightMapUv:Ne&&S(M.lightMap.channel),bumpMapUv:Ce&&S(M.bumpMap.channel),normalMapUv:be&&S(M.normalMap.channel),displacementMapUv:it&&S(M.displacementMap.channel),emissiveMapUv:Me&&S(M.emissiveMap.channel),metalnessMapUv:Be&&S(M.metalnessMap.channel),roughnessMapUv:z&&S(M.roughnessMap.channel),anisotropyMapUv:k&&S(M.anisotropyMap.channel),clearcoatMapUv:te&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:j&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&S(M.sheenRoughnessMap.channel),specularMapUv:ye&&S(M.specularMap.channel),specularColorMapUv:ce&&S(M.specularColorMap.channel),specularIntensityMapUv:Oe&&S(M.specularIntensityMap.channel),transmissionMapUv:D&&S(M.transmissionMap.channel),thicknessMapUv:ie&&S(M.thicknessMap.channel),alphaMapUv:se&&S(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(be||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(Ve||se),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function h(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){let y=v[M.type],I;if(y){let U=pn[y];I=Cl.clone(U.uniforms)}else I=M.uniforms;return I}function C(M,y){let I;for(let U=0,G=u.length;U<G;U++){let X=u[U];if(X.cacheKey===y){I=X,++I.usedTimes;break}}return I===void 0&&(I=new bm(i,y,M,r),u.push(I)),I}function A(M){if(--M.usedTimes===0){let y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function P(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:L}}function Am(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,v,S,g){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:S,group:g},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=S,h.group=g),e++,h}function o(d,f,p,v,S,g){let h=a(d,f,p,v,S,g);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(d,f,p,v,S,g){let h=a(d,f,p,v,S,g);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||wm),n.length>1&&n.sort(f||Jl),s.length>1&&s.sort(f||Jl)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Cm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Kl,i.set(n,[a])):s>=r.length?(a=new Kl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new We};break;case"SpotLight":t={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Im(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Pm=0;function Dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lm(i){let e=new Rm,t=Im(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new dt,a=new dt;function o(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,S=0,g=0,h=0,T=0,E=0,b=0,C=0,A=0,P=0;c.sort(Dm);for(let M=0,y=c.length;M<y;M++){let I=c[M],U=I.color,G=I.intensity,X=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*G,d+=U.g*G,f+=U.b*G;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],G);P++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ae=I.shadow,q=t.get(I);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(U).multiplyScalar(G),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[S]=Y;let ae=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,ae.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[S]=ae.matrix,I.castShadow){let q=t.get(I);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.spotShadow[S]=q,n.spotShadowMap[S]=J,b++}S++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(U).multiplyScalar(G),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=Y,g++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let ae=I.shadow,q=t.get(I);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,q.shadowCameraNear=ae.camera.near,q.shadowCameraFar=ae.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=I.shadow.matrix,E++}n.point[v]=Y,v++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(G),Y.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[h]=Y,h++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==S||L.rectAreaLength!==g||L.hemiLength!==h||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==b||L.numSpotMaps!==C||L.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=g,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,L.directionalLength=p,L.pointLength=v,L.spotLength=S,L.rectAreaLength=g,L.hemiLength=h,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=b,L.numSpotMaps=C,L.numLightProbes=P,n.version=Pm++)}function l(c,u){let d=0,f=0,p=0,v=0,S=0,g=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){let E=c[h];if(E.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(E.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(E.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){let b=n.hemi[S];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:n}}function jl(i){let e=new Lm(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Um(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jl(i),e.set(s,[o])):r>=a.length?(o=new jl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function Om(i,e,t){let n=new Hi,s=new Ge,r=new Ge,a=new lt,o=new br({depthPacking:gl}),l=new Er,c={},u=t.maxTextureSize,d={[En]:Dt,[Dt]:En,[Jt]:Jt},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Nm,fragmentShader:Fm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let v=new an;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new gt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let h=this.type;this.render=function(A,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(wn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=h!==dn&&this.type===dn,X=h===dn&&this.type!==dn;for(let J=0,Y=A.length;J<Y;J++){let ae=A[J],q=ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||G===!0||X===!0){let ge=this.type!==dn?{minFilter:Zt,magFilter:Zt}:{};q.map!==null&&q.map.dispose(),q.map=new hn(s.x,s.y,ge),q.map.texture.name=ae.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let me=q.getViewportCount();for(let ge=0;ge<me;ge++){let ze=q.getViewport(ge);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),U.viewport(a),q.updateMatrices(ae,ge),n=q.getFrustum(),b(P,L,q.camera,ae,this.type)}q.isPointLightShadow!==!0&&this.type===dn&&T(q,L),q.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(M,y,I)};function T(A,P){let L=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,L,f,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,L,p,S,null)}function E(A,P,L,M){let y=null,I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=y.uuid,G=P.uuid,X=c[U];X===void 0&&(X={},c[U]=X);let J=X[G];J===void 0&&(J=y.clone(),X[G]=J,P.addEventListener("dispose",C)),y=J}if(y.visible=P.visible,y.wireframe=P.wireframe,M===dn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=L}return y}function b(A,P,L,M,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let G=e.update(A),X=A.material;if(Array.isArray(X)){let J=G.groups;for(let Y=0,ae=J.length;Y<ae;Y++){let q=J[Y],le=X[q.materialIndex];if(le&&le.visible){let me=E(A,le,M,y);A.onBeforeShadow(i,A,P,L,G,me,q),i.renderBufferDirect(L,null,G,me,A,q),A.onAfterShadow(i,A,P,L,G,me,q)}}}else if(X.visible){let J=E(A,X,M,y);A.onBeforeShadow(i,A,P,L,G,J,null),i.renderBufferDirect(L,null,G,J,A,null),A.onAfterShadow(i,A,P,L,G,J,null)}}let U=A.children;for(let G=0,X=U.length;G<X;G++)b(U[G],P,L,M,y)}function C(A){A.target.removeEventListener("dispose",C);for(let L in c){let M=c[L],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Bm={[Fr]:Or,[Br]:Vr,[zr]:Hr,[ii]:kr,[Or]:Fr,[Vr]:Br,[Hr]:zr,[kr]:ii};function zm(i,e){function t(){let D=!1,ie=new lt,oe=null,se=new lt(0,0,0,0);return{setMask:function(Q){oe!==Q&&!D&&(i.colorMask(Q,Q,Q,Q),oe=Q)},setLocked:function(Q){D=Q},setClear:function(Q,$,he,Ae,Ye){Ye===!0&&(Q*=Ae,$*=Ae,he*=Ae),ie.set(Q,$,he,Ae),se.equals(ie)===!1&&(i.clearColor(Q,$,he,Ae),se.copy(ie))},reset:function(){D=!1,oe=null,se.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,oe=null,se=null,Q=null;return{setReversed:function($){if(ie!==$){let he=e.get("EXT_clip_control");$?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ie=$;let Ae=Q;Q=null,this.setClear(Ae)}},getReversed:function(){return ie},setTest:function($){$?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function($){oe!==$&&!D&&(i.depthMask($),oe=$)},setFunc:function($){if(ie&&($=Bm[$]),se!==$){switch($){case Fr:i.depthFunc(i.NEVER);break;case Or:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case ii:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Vr:i.depthFunc(i.GREATER);break;case Hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=$}},setLocked:function($){D=$},setClear:function($){Q!==$&&(ie&&($=1-$),i.clearDepth($),Q=$)},reset:function(){D=!1,oe=null,se=null,Q=null,ie=!1}}}function s(){let D=!1,ie=null,oe=null,se=null,Q=null,$=null,he=null,Ae=null,Ye=null;return{setTest:function(Ze){D||(Ze?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!D&&(i.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Mt,Ft){(oe!==Ze||se!==Mt||Q!==Ft)&&(i.stencilFunc(Ze,Mt,Ft),oe=Ze,se=Mt,Q=Ft)},setOp:function(Ze,Mt,Ft){($!==Ze||he!==Mt||Ae!==Ft)&&(i.stencilOp(Ze,Mt,Ft),$=Ze,he=Mt,Ae=Ft)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Ye!==Ze&&(i.clearStencil(Ze),Ye=Ze)},reset:function(){D=!1,ie=null,oe=null,se=null,Q=null,$=null,he=null,Ae=null,Ye=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],v=null,S=!1,g=null,h=null,T=null,E=null,b=null,C=null,A=null,P=new We(0,0,0),L=0,M=!1,y=null,I=null,U=null,G=null,X=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ae=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ae>=2);let le=null,me={},ge=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Ke=new lt().fromArray(ge),Qe=new lt().fromArray(ze);function $e(D,ie,oe,se){let Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<oe;he++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ie+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}let K={};K[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ii),Ce(!1),be(mo),ee(i.CULL_FACE),nt(wn);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function xe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Le(D,ie){return d[D]!==ie?(i.bindFramebuffer(D,ie),d[D]=ie,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Se(D,ie){let oe=p,se=!1;if(D){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));let Q=D.textures;if(oe.length!==Q.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let $=0,he=Q.length;$<he;$++)oe[$]=i.COLOR_ATTACHMENT0+$;oe.length=Q.length,se=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,se=!0);se&&i.drawBuffers(oe)}function Ve(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let ft={[zn]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};ft[Wc]=i.MIN,ft[qc]=i.MAX;let w={[Xc]:i.ZERO,[Yc]:i.ONE,[$c]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[el]:i.SRC_ALPHA_SATURATE,[jc]:i.DST_COLOR,[Jc]:i.DST_ALPHA,[Zc]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[Qc]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA,[tl]:i.CONSTANT_COLOR,[nl]:i.ONE_MINUS_CONSTANT_COLOR,[il]:i.CONSTANT_ALPHA,[sl]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(D,ie,oe,se,Q,$,he,Ae,Ye,Ze){if(D===wn){S===!0&&(xe(i.BLEND),S=!1);return}if(S===!1&&(ee(i.BLEND),S=!0),D!==Vc){if(D!==g||Ze!==M){if((h!==zn||b!==zn)&&(i.blendEquation(i.FUNC_ADD),h=zn,b=zn),Ze)switch(D){case ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _o:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,C=null,A=null,P.set(0,0,0),L=0,g=D,M=Ze}return}Q=Q||ie,$=$||oe,he=he||se,(ie!==h||Q!==b)&&(i.blendEquationSeparate(ft[ie],ft[Q]),h=ie,b=Q),(oe!==T||se!==E||$!==C||he!==A)&&(i.blendFuncSeparate(w[oe],w[se],w[$],w[he]),T=oe,E=se,C=$,A=he),(Ae.equals(P)===!1||Ye!==L)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ye),P.copy(Ae),L=Ye),g=D,M=!1}function Ne(D,ie){D.side===Jt?xe(i.CULL_FACE):ee(i.CULL_FACE);let oe=D.side===Dt;ie&&(oe=!oe),Ce(oe),D.blending===ni&&D.transparent===!1?nt(wn):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let se=D.stencilWrite;o.setTest(se),se&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function be(D){D!==zc?(ee(i.CULL_FACE),D!==I&&(D===mo?i.cullFace(i.BACK):D===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),I=D}function it(D){D!==U&&(Y&&i.lineWidth(D),U=D)}function Me(D,ie,oe){D?(ee(i.POLYGON_OFFSET_FILL),(G!==ie||X!==oe)&&(i.polygonOffset(ie,oe),G=ie,X=oe)):xe(i.POLYGON_OFFSET_FILL)}function Be(D){D?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function z(D){D===void 0&&(D=i.TEXTURE0+J-1),le!==D&&(i.activeTexture(D),le=D)}function Z(D,ie,oe){oe===void 0&&(le===null?oe=i.TEXTURE0+J-1:oe=le);let se=me[oe];se===void 0&&(se={type:void 0,texture:void 0},me[oe]=se),(se.type!==D||se.texture!==ie)&&(le!==oe&&(i.activeTexture(oe),le=oe),i.bindTexture(D,ie||K[D]),se.type=D,se.texture=ie)}function _(){let D=me[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function m(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){Ke.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ke.copy(D))}function Re(D){Qe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function ye(D,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let se=oe.get(D);se===void 0&&(se=i.getUniformBlockIndex(ie,D.name),oe.set(D,se))}function ce(D,ie){let se=c.get(ie).get(D);l.get(ie)!==se&&(i.uniformBlockBinding(ie,se,D.__bindingPointIndex),l.set(ie,se))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,me={},d={},f=new WeakMap,p=[],v=null,S=!1,g=null,h=null,T=null,E=null,b=null,C=null,A=null,P=new We(0,0,0),L=0,M=!1,y=null,I=null,U=null,G=null,X=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Le,drawBuffers:Se,useProgram:Ve,setBlending:nt,setMaterial:Ne,setFlipSided:Ce,setCullFace:be,setLineWidth:it,setPolygonOffset:Me,setScissorTest:Be,activeTexture:z,bindTexture:Z,unbindTexture:_,compressedTexImage2D:m,compressedTexImage3D:R,texImage2D:Te,texImage3D:ne,updateUBOMapping:ye,uniformBlockBinding:ce,texStorage2D:j,texStorage3D:pe,texSubImage2D:F,texSubImage3D:W,compressedTexSubImage2D:k,compressedTexSubImage3D:te,scissor:ue,viewport:Re,reset:Oe}}function km(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(_,m){return p?new OffscreenCanvas(_,m):ps("canvas")}function S(_,m,R){let F=1,W=Z(_);if((W.width>R||W.height>R)&&(F=R/Math.max(W.width,W.height)),F<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let k=Math.floor(F*W.width),te=Math.floor(F*W.height);d===void 0&&(d=v(k,te));let j=m?v(k,te):d;return j.width=k,j.height=te,j.getContext("2d").drawImage(_,0,0,k,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+k+"x"+te+")."),j}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),_;return _}function g(_){return _.generateMipmaps}function h(_){i.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(_,m,R,F,W=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let k=m;if(m===i.RED&&(R===i.FLOAT&&(k=i.R32F),R===i.HALF_FLOAT&&(k=i.R16F),R===i.UNSIGNED_BYTE&&(k=i.R8)),m===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.R8UI),R===i.UNSIGNED_SHORT&&(k=i.R16UI),R===i.UNSIGNED_INT&&(k=i.R32UI),R===i.BYTE&&(k=i.R8I),R===i.SHORT&&(k=i.R16I),R===i.INT&&(k=i.R32I)),m===i.RG&&(R===i.FLOAT&&(k=i.RG32F),R===i.HALF_FLOAT&&(k=i.RG16F),R===i.UNSIGNED_BYTE&&(k=i.RG8)),m===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RG8UI),R===i.UNSIGNED_SHORT&&(k=i.RG16UI),R===i.UNSIGNED_INT&&(k=i.RG32UI),R===i.BYTE&&(k=i.RG8I),R===i.SHORT&&(k=i.RG16I),R===i.INT&&(k=i.RG32I)),m===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGB8UI),R===i.UNSIGNED_SHORT&&(k=i.RGB16UI),R===i.UNSIGNED_INT&&(k=i.RGB32UI),R===i.BYTE&&(k=i.RGB8I),R===i.SHORT&&(k=i.RGB16I),R===i.INT&&(k=i.RGB32I)),m===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),R===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),R===i.UNSIGNED_INT&&(k=i.RGBA32UI),R===i.BYTE&&(k=i.RGBA8I),R===i.SHORT&&(k=i.RGBA16I),R===i.INT&&(k=i.RGBA32I)),m===i.RGB&&(R===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),R===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),m===i.RGBA){let te=W?ds:Je.getTransfer(F);R===i.FLOAT&&(k=i.RGBA32F),R===i.HALF_FLOAT&&(k=i.RGBA16F),R===i.UNSIGNED_BYTE&&(k=te===et?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function b(_,m){let R;return _?m===null||m===Yn||m===Xi?R=i.DEPTH24_STENCIL8:m===fn?R=i.DEPTH32F_STENCIL8:m===Wi&&(R=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Yn||m===Xi?R=i.DEPTH_COMPONENT24:m===fn?R=i.DEPTH_COMPONENT32F:m===Wi&&(R=i.DEPTH_COMPONENT16),R}function C(_,m){return g(_)===!0||_.isFramebufferTexture&&_.minFilter!==Zt&&_.minFilter!==sn?Math.log2(Math.max(m.width,m.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?m.mipmaps.length:1}function A(_){let m=_.target;m.removeEventListener("dispose",A),L(m),m.isVideoTexture&&u.delete(m)}function P(_){let m=_.target;m.removeEventListener("dispose",P),y(m)}function L(_){let m=n.get(_);if(m.__webglInit===void 0)return;let R=_.source,F=f.get(R);if(F){let W=F[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&M(_),Object.keys(F).length===0&&f.delete(R)}n.remove(_)}function M(_){let m=n.get(_);i.deleteTexture(m.__webglTexture);let R=_.source,F=f.get(R);delete F[m.__cacheKey],a.memory.textures--}function y(_){let m=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(m.__webglFramebuffer[F]))for(let W=0;W<m.__webglFramebuffer[F].length;W++)i.deleteFramebuffer(m.__webglFramebuffer[F][W]);else i.deleteFramebuffer(m.__webglFramebuffer[F]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[F])}else{if(Array.isArray(m.__webglFramebuffer))for(let F=0;F<m.__webglFramebuffer.length;F++)i.deleteFramebuffer(m.__webglFramebuffer[F]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let F=0;F<m.__webglColorRenderbuffer.length;F++)m.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[F]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let R=_.textures;for(let F=0,W=R.length;F<W;F++){let k=n.get(R[F]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(R[F])}n.remove(_)}let I=0;function U(){I=0}function G(){let _=I;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),I+=1,_}function X(_){let m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function J(_,m){let R=n.get(_);if(_.isVideoTexture&&Be(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&R.__version!==_.version){let F=_.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(R,_,m);return}}else _.isExternalTexture&&(R.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+m)}function Y(_,m){let R=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){K(R,_,m);return}t.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+m)}function ae(_,m){let R=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&R.__version!==_.version){K(R,_,m);return}t.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+m)}function q(_,m){let R=n.get(_);if(_.version>0&&R.__version!==_.version){ee(R,_,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+m)}let le={[pr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},me={[Zt]:i.NEAREST,[pl]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ge={[_l]:i.NEVER,[El]:i.ALWAYS,[xl]:i.LESS,[Po]:i.LEQUAL,[yl]:i.EQUAL,[bl]:i.GEQUAL,[Ml]:i.GREATER,[Sl]:i.NOTEQUAL};function ze(_,m){if(m.type===fn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===sn||m.magFilter===qr||m.magFilter===Fs||m.magFilter===Xn||m.minFilter===sn||m.minFilter===qr||m.minFilter===Fs||m.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,le[m.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,le[m.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,le[m.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,me[m.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,me[m.minFilter]),m.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,ge[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Zt||m.minFilter!==Fs&&m.minFilter!==Xn||m.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Ke(_,m){let R=!1;_.__webglInit===void 0&&(_.__webglInit=!0,m.addEventListener("dispose",A));let F=m.source,W=f.get(F);W===void 0&&(W={},f.set(F,W));let k=X(m);if(k!==_.__cacheKey){W[k]===void 0&&(W[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),W[k].usedTimes++;let te=W[_.__cacheKey];te!==void 0&&(W[_.__cacheKey].usedTimes--,te.usedTimes===0&&M(m)),_.__cacheKey=k,_.__webglTexture=W[k].texture}return R}function Qe(_,m,R){return Math.floor(Math.floor(_/R)/m)}function $e(_,m,R,F){let k=_.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,R,F,m.data);else{k.sort((ne,ue)=>ne.start-ue.start);let te=0;for(let ne=1;ne<k.length;ne++){let ue=k[te],Re=k[ne],ye=ue.start+ue.count,ce=Qe(Re.start,m.width,4),Oe=Qe(ue.start,m.width,4);Re.start<=ye+1&&ce===Oe&&Qe(Re.start+Re.count-1,m.width,4)===ce?ue.count=Math.max(ue.count,Re.start+Re.count-ue.start):(++te,k[te]=Re)}k.length=te+1;let j=i.getParameter(i.UNPACK_ROW_LENGTH),pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let ne=0,ue=k.length;ne<ue;ne++){let Re=k[ne],ye=Math.floor(Re.start/4),ce=Math.ceil(Re.count/4),Oe=ye%m.width,D=Math.floor(ye/m.width),ie=ce,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Oe,D,ie,oe,R,F,m.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,j),i.pixelStorei(i.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function K(_,m,R){let F=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(F=i.TEXTURE_3D);let W=Ke(_,m),k=m.source;t.bindTexture(F,_.__webglTexture,i.TEXTURE0+R);let te=n.get(k);if(k.version!==te.__version||W===!0){t.activeTexture(i.TEXTURE0+R);let j=Je.getPrimaries(Je.workingColorSpace),pe=m.colorSpace===Rn?null:Je.getPrimaries(m.colorSpace),Te=m.colorSpace===Rn||j===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=S(m.image,!1,s.maxTextureSize);ne=z(m,ne);let ue=r.convert(m.format,m.colorSpace),Re=r.convert(m.type),ye=E(m.internalFormat,ue,Re,m.colorSpace,m.isVideoTexture);ze(F,m);let ce,Oe=m.mipmaps,D=m.isVideoTexture!==!0,ie=te.__version===void 0||W===!0,oe=k.dataReady,se=C(m,ne);if(m.isDepthTexture)ye=b(m.format===Yi,m.type),ie&&(D?t.texStorage2D(i.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ue,Re,null));else if(m.isDataTexture)if(Oe.length>0){D&&ie&&t.texStorage2D(i.TEXTURE_2D,se,ye,Oe[0].width,Oe[0].height);for(let Q=0,$=Oe.length;Q<$;Q++)ce=Oe[Q],D?oe&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Re,ce.data):t.texImage2D(i.TEXTURE_2D,Q,ye,ce.width,ce.height,0,ue,Re,ce.data);m.generateMipmaps=!1}else D?(ie&&t.texStorage2D(i.TEXTURE_2D,se,ye,ne.width,ne.height),oe&&$e(m,ne,ue,Re)):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,ue,Re,ne.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){D&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,Oe[0].width,Oe[0].height,ne.depth);for(let Q=0,$=Oe.length;Q<$;Q++)if(ce=Oe[Q],m.format!==Kt)if(ue!==null)if(D){if(oe)if(m.layerUpdates.size>0){let he=Bo(ce.width,ce.height,m.format,m.type);for(let Ae of m.layerUpdates){let Ye=ce.data.subarray(Ae*he/ce.data.BYTES_PER_ELEMENT,(Ae+1)*he/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ae,ce.width,ce.height,1,ue,Ye)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ne.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ye,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ne.depth,ue,Re,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ye,ce.width,ce.height,ne.depth,0,ue,Re,ce.data)}else{D&&ie&&t.texStorage2D(i.TEXTURE_2D,se,ye,Oe[0].width,Oe[0].height);for(let Q=0,$=Oe.length;Q<$;Q++)ce=Oe[Q],m.format!==Kt?ue!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Re,ce.data):t.texImage2D(i.TEXTURE_2D,Q,ye,ce.width,ce.height,0,ue,Re,ce.data)}else if(m.isDataArrayTexture)if(D){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,ne.width,ne.height,ne.depth),oe)if(m.layerUpdates.size>0){let Q=Bo(ne.width,ne.height,m.format,m.type);for(let $ of m.layerUpdates){let he=ne.data.subarray($*Q/ne.data.BYTES_PER_ELEMENT,($+1)*Q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,ue,Re,he)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,ue,Re,ne.data);else if(m.isData3DTexture)D?(ie&&t.texStorage3D(i.TEXTURE_3D,se,ye,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,ue,Re,ne.data);else if(m.isFramebufferTexture){if(ie)if(D)t.texStorage2D(i.TEXTURE_2D,se,ye,ne.width,ne.height);else{let Q=ne.width,$=ne.height;for(let he=0;he<se;he++)t.texImage2D(i.TEXTURE_2D,he,ye,Q,$,0,ue,Re,null),Q>>=1,$>>=1}}else if(Oe.length>0){if(D&&ie){let Q=Z(Oe[0]);t.texStorage2D(i.TEXTURE_2D,se,ye,Q.width,Q.height)}for(let Q=0,$=Oe.length;Q<$;Q++)ce=Oe[Q],D?oe&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,Re,ce):t.texImage2D(i.TEXTURE_2D,Q,ye,ue,Re,ce);m.generateMipmaps=!1}else if(D){if(ie){let Q=Z(ne);t.texStorage2D(i.TEXTURE_2D,se,ye,Q.width,Q.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,ye,ue,Re,ne);g(m)&&h(F),te.__version=k.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function ee(_,m,R){if(m.image.length!==6)return;let F=Ke(_,m),W=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+R);let k=n.get(W);if(W.version!==k.__version||F===!0){t.activeTexture(i.TEXTURE0+R);let te=Je.getPrimaries(Je.workingColorSpace),j=m.colorSpace===Rn?null:Je.getPrimaries(m.colorSpace),pe=m.colorSpace===Rn||te===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Te=m.isCompressedTexture||m.image[0].isCompressedTexture,ne=m.image[0]&&m.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Te&&!ne?ue[$]=S(m.image[$],!0,s.maxCubemapSize):ue[$]=ne?m.image[$].image:m.image[$],ue[$]=z(m,ue[$]);let Re=ue[0],ye=r.convert(m.format,m.colorSpace),ce=r.convert(m.type),Oe=E(m.internalFormat,ye,ce,m.colorSpace),D=m.isVideoTexture!==!0,ie=k.__version===void 0||F===!0,oe=W.dataReady,se=C(m,Re);ze(i.TEXTURE_CUBE_MAP,m);let Q;if(Te){D&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Oe,Re.width,Re.height);for(let $=0;$<6;$++){Q=ue[$].mipmaps;for(let he=0;he<Q.length;he++){let Ae=Q[he];m.format!==Kt?ye!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,Ae.width,Ae.height,ye,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,Ae.width,Ae.height,ye,ce,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Oe,Ae.width,Ae.height,0,ye,ce,Ae.data)}}}else{if(Q=m.mipmaps,D&&ie){Q.length>0&&se++;let $=Z(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ne){D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,ye,ce,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ue[$].width,ue[$].height,0,ye,ce,ue[$].data);for(let he=0;he<Q.length;he++){let Ye=Q[he].image[$].image;D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Ye.width,Ye.height,ye,ce,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Oe,Ye.width,Ye.height,0,ye,ce,Ye.data)}}else{D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,ce,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,ye,ce,ue[$]);for(let he=0;he<Q.length;he++){let Ae=Q[he];D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,ye,ce,Ae.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Oe,ye,ce,Ae.image[$])}}}g(m)&&h(i.TEXTURE_CUBE_MAP),k.__version=W.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function xe(_,m,R,F,W,k){let te=r.convert(R.format,R.colorSpace),j=r.convert(R.type),pe=E(R.internalFormat,te,j,R.colorSpace),Te=n.get(m),ne=n.get(R);if(ne.__renderTarget=m,!Te.__hasExternalTextures){let ue=Math.max(1,m.width>>k),Re=Math.max(1,m.height>>k);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,k,pe,ue,Re,m.depth,0,te,j,null):t.texImage2D(W,k,pe,ue,Re,0,te,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Me(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,W,ne.__webglTexture,0,it(m)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,W,ne.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(_,m,R){if(i.bindRenderbuffer(i.RENDERBUFFER,_),m.depthBuffer){let F=m.depthTexture,W=F&&F.isDepthTexture?F.type:null,k=b(m.stencilBuffer,W),te=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=it(m);Me(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,k,m.width,m.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,k,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,k,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,_)}else{let F=m.textures;for(let W=0;W<F.length;W++){let k=F[W],te=r.convert(k.format,k.colorSpace),j=r.convert(k.type),pe=E(k.internalFormat,te,j,k.colorSpace),Te=it(m);R&&Me(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,pe,m.width,m.height):Me(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,pe,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,pe,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(_,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(m.depthTexture);F.__renderTarget=m,(!F.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),J(m.depthTexture,0);let W=F.__webglTexture,k=it(m);if(m.depthTexture.format===Ni)Me(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(m.depthTexture.format===Yi)Me(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ve(_){let m=n.get(_),R=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){let F=_.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),F){let W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,F.removeEventListener("dispose",W)};F.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=F}if(_.depthTexture&&!m.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let F=_.texture.mipmaps;F&&F.length>0?Se(m.__webglFramebuffer[0],_):Se(m.__webglFramebuffer,_)}else if(R){m.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[F]),m.__webglDepthbuffer[F]===void 0)m.__webglDepthbuffer[F]=i.createRenderbuffer(),Le(m.__webglDepthbuffer[F],_,!1);else{let W=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,k)}}else{let F=_.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Le(m.__webglDepthbuffer,_,!1);else{let W=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(_,m,R){let F=n.get(_);m!==void 0&&xe(F.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&Ve(_)}function w(_){let m=_.texture,R=n.get(_),F=n.get(m);_.addEventListener("dispose",P);let W=_.textures,k=_.isWebGLCubeRenderTarget===!0,te=W.length>1;if(te||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=m.version,a.memory.textures++),k){R.__webglFramebuffer=[];for(let j=0;j<6;j++)if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[j]=[];for(let pe=0;pe<m.mipmaps.length;pe++)R.__webglFramebuffer[j][pe]=i.createFramebuffer()}else R.__webglFramebuffer[j]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let j=0;j<m.mipmaps.length;j++)R.__webglFramebuffer[j]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(te)for(let j=0,pe=W.length;j<pe;j++){let Te=n.get(W[j]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&Me(_)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let j=0;j<W.length;j++){let pe=W[j];R.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[j]);let Te=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),ue=E(pe.internalFormat,Te,ne,pe.colorSpace,_.isXRRenderTarget===!0),Re=it(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ue,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,R.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(R.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),ze(i.TEXTURE_CUBE_MAP,m);for(let j=0;j<6;j++)if(m.mipmaps&&m.mipmaps.length>0)for(let pe=0;pe<m.mipmaps.length;pe++)xe(R.__webglFramebuffer[j][pe],_,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe);else xe(R.__webglFramebuffer[j],_,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(m)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let j=0,pe=W.length;j<pe;j++){let Te=W[j],ne=n.get(Te),ue=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ue=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),ze(ue,Te),xe(R.__webglFramebuffer,_,Te,i.COLOR_ATTACHMENT0+j,ue,0),g(Te)&&h(ue)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(j=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,F.__webglTexture),ze(j,m),m.mipmaps&&m.mipmaps.length>0)for(let pe=0;pe<m.mipmaps.length;pe++)xe(R.__webglFramebuffer[pe],_,m,i.COLOR_ATTACHMENT0,j,pe);else xe(R.__webglFramebuffer,_,m,i.COLOR_ATTACHMENT0,j,0);g(m)&&h(j),t.unbindTexture()}_.depthBuffer&&Ve(_)}function nt(_){let m=_.textures;for(let R=0,F=m.length;R<F;R++){let W=m[R];if(g(W)){let k=T(_),te=n.get(W).__webglTexture;t.bindTexture(k,te),h(k),t.unbindTexture()}}}let Ne=[],Ce=[];function be(_){if(_.samples>0){if(Me(_)===!1){let m=_.textures,R=_.width,F=_.height,W=i.COLOR_BUFFER_BIT,k=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=n.get(_),j=m.length>1;if(j)for(let Te=0;Te<m.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);let pe=_.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Te=0;Te<m.length;Te++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);let ne=n.get(m[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,R,F,0,0,R,F,W,i.NEAREST),l===!0&&(Ne.length=0,Ce.length=0,Ne.push(i.COLOR_ATTACHMENT0+Te),_.depthBuffer&&_.resolveDepthBuffer===!1&&(Ne.push(k),Ce.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Te=0;Te<m.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,te.__webglColorRenderbuffer[Te]);let ne=n.get(m[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){let m=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function it(_){return Math.min(s.maxSamples,_.samples)}function Me(_){let m=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Be(_){let m=a.render.frame;u.get(_)!==m&&(u.set(_,m),_.update())}function z(_,m){let R=_.colorSpace,F=_.format,W=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||R!==si&&R!==Rn&&(Je.getTransfer(R)===et?(F!==Kt||W!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),m}function Z(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=ae,this.setTextureCube=q,this.rebindTextures=ft,this.setupRenderTarget=w,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me}function Vm(i,e){function t(n,s=Rn){let r,a=Je.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Yr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===To)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===So)return i.BYTE;if(n===bo)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===Xr)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===Ao)return i.ALPHA;if(n===wo)return i.RGB;if(n===Kt)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Zr)return i.RED_INTEGER;if(n===Ro)return i.RG;if(n===Jr)return i.RG_INTEGER;if(n===Kr)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===ks)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Qr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===aa||n===oa||n===ca||n===la||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===ya||n===Ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===ba||n===Ea||n===Ta)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gm=`
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

}`,Ko=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:Hm,fragmentShader:Gm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jo=class extends Tn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null,S=typeof XRWebGLBinding<"u",g=new Ko,h={},T=t.getContextAttributes(),E=null,b=null,C=[],A=[],P=new Ge,L=null,M=new At;M.viewport=new lt;let y=new At;y.viewport=new lt;let I=[M,y],U=new Ur,G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=C[K];return ee===void 0&&(ee=new Vi,C[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=C[K];return ee===void 0&&(ee=new Vi,C[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=C[K];return ee===void 0&&(ee=new Vi,C[K]=ee),ee.getHandSpace()};function J(K){let ee=A.indexOf(K.inputSource);if(ee===-1)return;let xe=C[ee];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ae);for(let K=0;K<C.length;K++){let ee=A[K];ee!==null&&(A[K]=null,C[K].disconnect(ee))}G=null,X=null,g.reset();for(let K in h)delete h[K];e.setRenderTarget(E),p=null,f=null,d=null,s=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?Yi:Ni,Le=T.stencil?Xi:Yn);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new hn(f.textureWidth,f.textureHeight,{format:Kt,type:cn,depthTexture:new Es(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new hn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(K){for(let ee=0;ee<K.removed.length;ee++){let xe=K.removed[ee],Le=A.indexOf(xe);Le>=0&&(A[Le]=null,C[Le].disconnect(xe))}for(let ee=0;ee<K.added.length;ee++){let xe=K.added[ee],Le=A.indexOf(xe);if(Le===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=A.length){A.push(xe),Le=Ve;break}else if(A[Ve]===null){A[Ve]=xe,Le=Ve;break}if(Le===-1)break}let Se=C[Le];Se&&Se.connect(xe)}}let q=new B,le=new B;function me(K,ee,xe){q.setFromMatrixPosition(ee.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);let Le=q.distanceTo(le),Se=ee.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,ft=Se[14]/(Se[10]-1),w=Se[14]/(Se[10]+1),nt=(Se[9]+1)/Se[5],Ne=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],be=(Ve[8]+1)/Ve[0],it=ft*Ce,Me=ft*be,Be=Le/(-Ce+be),z=Be*-Ce;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(z),K.translateZ(Be),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Z=ft+Be,_=w+Be,m=it-z,R=Me+(Le-z),F=nt*w/_*Z,W=Ne*w/_*Z;K.projectionMatrix.makePerspective(m,R,F,W,Z,_),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ge(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,xe=K.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),U.near=y.near=M.near=ee,U.far=y.far=M.far=xe,(G!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,X=U.far),U.layers.mask=K.layers.mask|6,M.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let Le=K.parent,Se=U.cameras;ge(U,Le);for(let Ve=0;Ve<Se.length;Ve++)ge(Se[Ve],Le);Se.length===2?me(U,M,y):U.projectionMatrix.copy(M.projectionMatrix),ze(K,U,Le)};function ze(K,ee,xe){xe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return h[K]};let Ke=null;function Qe(K,ee){if(u=ee.getViewerPose(c||a),v=ee,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Le=!1;xe.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let w=0;w<xe.length;w++){let nt=xe[w],Ne=null;if(p!==null)Ne=p.getViewport(nt);else{let be=d.getViewSubImage(f,nt);Ne=be.viewport,w===0&&(e.setRenderTargetTextures(b,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(b))}let Ce=I[w];Ce===void 0&&(Ce=new At,Ce.layers.enable(w),Ce.viewport=new lt,I[w]=Ce),Ce.matrix.fromArray(nt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(nt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),w===0&&(U.matrix.copy(Ce.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(Ce)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let w=d.getDepthInformation(xe[0]);w&&w.isValid&&w.texture&&g.init(w,s.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let w=0;w<xe.length;w++){let nt=xe[w].camera;if(nt){let Ne=h[nt];Ne||(Ne=new Ts,h[nt]=Ne);let Ce=d.getCameraImage(nt);Ne.sourceTexture=Ce}}}}for(let xe=0;xe<C.length;xe++){let Le=A[xe],Se=C[xe];Le!==null&&Se!==void 0&&Se.update(Le,ee,c||a)}Ke&&Ke(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}let $e=new Ql;$e.setAnimationLoop(Qe),this.setAnimationLoop=function(K){Ke=K},this.dispose=function(){}}},fi=new rn,Wm=new dt;function qm(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,No(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,T,E,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,b)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),S(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,T,E):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Dt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Dt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let T=e.get(h),E=T.envMap,b=T.envMapRotation;E&&(g.envMap.value=E,fi.copy(b),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),g.envMapRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(fi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,T,E){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*T,g.scale.value=E*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,T){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){let T=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let b=E.program;n.uniformBlockBinding(T,b)}function c(T,E){let b=s[T.id];b===void 0&&(v(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",g));let C=E.program;n.updateUBOMapping(T,C);let A=e.render.frame;r[T.id]!==A&&(f(T),r[T.id]=A)}function u(T){let E=d();T.__bindingPointIndex=E;let b=i.createBuffer(),C=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let E=s[T.id],b=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,P=b.length;A<P;A++){let L=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,y=L.length;M<y;M++){let I=L[M];if(p(I,A,M,C)===!0){let U=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],X=0;for(let J=0;J<G.length;J++){let Y=G[J],ae=S(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,U+X,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,X),X+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,b,C){let A=T.value,P=E+"_"+b;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{let L=C[P];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[P]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(T){let E=T.uniforms,b=0,C=16;for(let P=0,L=E.length;P<L;P++){let M=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,I=M.length;y<I;y++){let U=M[y],G=Array.isArray(U.value)?U.value:[U.value];for(let X=0,J=G.length;X<J;X++){let Y=G[X],ae=S(Y),q=b%C,le=q%ae.boundary,me=q+le;b+=le,me!==0&&C-me<ae.storage&&(b+=C-me),U.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=ae.storage}}}let A=b%C;return A>0&&(b+=C-A),T.__size=b,T.__cache={},this}function S(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function g(T){let E=T.target;E.removeEventListener("dispose",g);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var Ia=class{constructor(e={}){let{canvas:t=Tl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=new Uint32Array(4),S=new Int32Array(4),g=null,h=null,T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,C=!1;this._outputColorSpace=Tt;let A=0,P=0,L=null,M=-1,y=null,I=new lt,U=new lt,G=null,X=new We(0),J=0,Y=t.width,ae=t.height,q=1,le=null,me=null,ge=new lt(0,0,Y,ae),ze=new lt(0,0,Y,ae),Ke=!1,Qe=new Hi,$e=!1,K=!1,ee=new dt,xe=new B,Le=new lt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function ft(){return L===null?q:1}let w=n;function nt(x,N){return t.getContext(x,N)}try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Q,!1),w===null){let N="webgl2";if(w=nt(N,x),w===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ne,Ce,be,it,Me,Be,z,Z,_,m,R,F,W,k,te,j,pe,Te,ne,ue,Re,ye,ce,Oe;function D(){Ne=new up(w),Ne.init(),ye=new Vm(w,Ne),Ce=new ip(w,Ne,e,ye),be=new zm(w,Ne),Ce.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),it=new fp(w),Me=new Am,Be=new km(w,Ne,be,Me,Ce,ye,it),z=new rp(b),Z=new lp(b),_=new _h(w),ce=new tp(w,_),m=new hp(w,_,it,ce),R=new mp(w,m,_,it),ne=new pp(w,Ce,Be),j=new sp(Me),F=new Tm(b,z,Z,Ne,Ce,ce,j),W=new qm(b,Me),k=new Cm,te=new Um(Ne),Te=new ep(b,z,Z,be,R,p,l),pe=new Om(b,R,Ce),Oe=new Xm(w,it,Ce,be),ue=new np(w,Ne,it),Re=new dp(w,Ne,it),it.programs=F.programs,b.capabilities=Ce,b.extensions=Ne,b.properties=Me,b.renderLists=k,b.shadowMap=pe,b.state=be,b.info=it}D();let ie=new jo(b,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let x=Ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(x){x!==void 0&&(q=x,this.setSize(Y,ae,!1))},this.getSize=function(x){return x.set(Y,ae)},this.setSize=function(x,N,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,ae=N,t.width=Math.floor(x*q),t.height=Math.floor(N*q),V===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(Y*q,ae*q).floor()},this.setDrawingBufferSize=function(x,N,V){Y=x,ae=N,q=V,t.width=Math.floor(x*V),t.height=Math.floor(N*V),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,N,V,H){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,N,V,H),be.viewport(I.copy(ge).multiplyScalar(q).round())},this.getScissor=function(x){return x.copy(ze)},this.setScissor=function(x,N,V,H){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,N,V,H),be.scissor(U.copy(ze).multiplyScalar(q).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(x){be.setScissorTest(Ke=x)},this.setOpaqueSort=function(x){le=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,V=!0){let H=0;if(x){let O=!1;if(L!==null){let re=L.texture.format;O=re===Kr||re===Jr||re===Zr}if(O){let re=L.texture.type,fe=re===cn||re===Yn||re===Wi||re===Xi||re===Yr||re===$r,Ee=Te.getClearColor(),_e=Te.getClearAlpha(),De=Ee.r,Ue=Ee.g,we=Ee.b;fe?(v[0]=De,v[1]=Ue,v[2]=we,v[3]=_e,w.clearBufferuiv(w.COLOR,0,v)):(S[0]=De,S[1]=Ue,S[2]=we,S[3]=_e,w.clearBufferiv(w.COLOR,0,S))}else H|=w.COLOR_BUFFER_BIT}N&&(H|=w.DEPTH_BUFFER_BIT),V&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Te.dispose(),k.dispose(),te.dispose(),Me.dispose(),z.dispose(),Z.dispose(),R.dispose(),ce.dispose(),Oe.dispose(),F.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ft),ie.removeEventListener("sessionend",hc),Zn.stop()};function oe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let x=it.autoReset,N=pe.enabled,V=pe.autoUpdate,H=pe.needsUpdate,O=pe.type;D(),it.autoReset=x,pe.enabled=N,pe.autoUpdate=V,pe.needsUpdate=H,pe.type=O}function Q(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $(x){let N=x.target;N.removeEventListener("dispose",$),he(N)}function he(x){Ae(x),Me.remove(x)}function Ae(x){let N=Me.get(x).programs;N!==void 0&&(N.forEach(function(V){F.releaseProgram(V)}),x.isShaderMaterial&&F.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,V,H,O,re){N===null&&(N=Se);let fe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=_u(x,N,V,H,O);be.setMaterial(H,fe);let _e=V.index,De=1;if(H.wireframe===!0){if(_e=m.getWireframeAttribute(V),_e===void 0)return;De=2}let Ue=V.drawRange,we=V.attributes.position,qe=Ue.start*De,tt=(Ue.start+Ue.count)*De;re!==null&&(qe=Math.max(qe,re.start*De),tt=Math.min(tt,(re.start+re.count)*De)),_e!==null?(qe=Math.max(qe,0),tt=Math.min(tt,_e.count)):we!=null&&(qe=Math.max(qe,0),tt=Math.min(tt,we.count));let ht=tt-qe;if(ht<0||ht===1/0)return;ce.setup(O,H,Ee,V,_e);let rt,st=ue;if(_e!==null&&(rt=_.get(_e),st=Re,st.setIndex(rt)),O.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*ft()),st.setMode(w.LINES)):st.setMode(w.TRIANGLES);else if(O.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),be.setLineWidth(Ie*ft()),O.isLineSegments?st.setMode(w.LINES):O.isLineLoop?st.setMode(w.LINE_LOOP):st.setMode(w.LINE_STRIP)}else O.isPoints?st.setMode(w.POINTS):O.isSprite&&st.setMode(w.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,ot=O._multiDrawCounts,je=O._multiDrawCount,Ot=_e?_.get(_e).bytesPerElement:1,yi=Me.get(H).currentProgram.getUniforms();for(let Bt=0;Bt<je;Bt++)yi.setValue(w,"_gl_DrawID",Bt),st.render(Ie[Bt]/Ot,ot[Bt])}else if(O.isInstancedMesh)st.renderInstances(qe,ht,O.count);else if(V.isInstancedBufferGeometry){let Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ot=Math.min(V.instanceCount,Ie);st.renderInstances(qe,ht,ot)}else st.render(qe,ht)};function Ye(x,N,V){x.transparent===!0&&x.side===Jt&&x.forceSinglePass===!1?(x.side=Dt,x.needsUpdate=!0,Xs(x,N,V),x.side=En,x.needsUpdate=!0,Xs(x,N,V),x.side=Jt):Xs(x,N,V)}this.compile=function(x,N,V=null){V===null&&(V=x),h=te.get(V),h.init(N),E.push(h),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();let H=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let re=O.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){let Ee=re[fe];Ye(Ee,V,O),H.add(Ee)}else Ye(re,V,O),H.add(re)}),h=E.pop(),H},this.compileAsync=function(x,N,V=null){let H=this.compile(x,N,V);return new Promise(O=>{function re(){if(H.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){O(x);return}setTimeout(re,10)}Ne.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ze=null;function Mt(x){Ze&&Ze(x)}function Ft(){Zn.stop()}function hc(){Zn.start()}let Zn=new Ql;Zn.setAnimationLoop(Mt),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(x){Ze=x,ie.setAnimationLoop(x),x===null?Zn.stop():Zn.start()},ie.addEventListener("sessionstart",Ft),ie.addEventListener("sessionend",hc),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,N,L),h=te.get(x,E.length),h.init(N),E.push(h),ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Qe.setFromProjectionMatrix(ee,nn,N.reversedDepth),K=this.localClippingEnabled,$e=j.init(this.clippingPlanes,K),g=k.get(x,T.length),g.init(),T.push(g),ie.enabled===!0&&ie.isPresenting===!0){let re=b.xr.getDepthSensingMesh();re!==null&&Na(re,N,-1/0,b.sortObjects)}Na(x,N,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(le,me),Ve=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ve&&Te.addToRenderList(g,x),this.info.render.frame++,$e===!0&&j.beginShadows();let V=h.state.shadowsArray;pe.render(V,x,N),$e===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,O=g.transmissive;if(h.setupLights(),N.isArrayCamera){let re=N.cameras;if(O.length>0)for(let fe=0,Ee=re.length;fe<Ee;fe++){let _e=re[fe];fc(H,O,x,_e)}Ve&&Te.render(x);for(let fe=0,Ee=re.length;fe<Ee;fe++){let _e=re[fe];dc(g,x,_e,_e.viewport)}}else O.length>0&&fc(H,O,x,N),Ve&&Te.render(x),dc(g,x,N);L!==null&&P===0&&(Be.updateMultisampleRenderTarget(L),Be.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(b,x,N),ce.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(h=E[E.length-1],$e===!0&&j.setGlobalState(b.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Na(x,N,V,H){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Qe.intersectsSprite(x)){H&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ee);let fe=R.update(x),Ee=x.material;Ee.visible&&g.push(x,fe,Ee,V,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Qe.intersectsObject(x))){let fe=R.update(x),Ee=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(ee)),Array.isArray(Ee)){let _e=fe.groups;for(let De=0,Ue=_e.length;De<Ue;De++){let we=_e[De],qe=Ee[we.materialIndex];qe&&qe.visible&&g.push(x,fe,qe,V,Le.z,we)}}else Ee.visible&&g.push(x,fe,Ee,V,Le.z,null)}}let re=x.children;for(let fe=0,Ee=re.length;fe<Ee;fe++)Na(re[fe],N,V,H)}function dc(x,N,V,H){let O=x.opaque,re=x.transmissive,fe=x.transparent;h.setupLightsView(V),$e===!0&&j.setGlobalState(b.clippingPlanes,V),H&&be.viewport(I.copy(H)),O.length>0&&qs(O,N,V),re.length>0&&qs(re,N,V),fe.length>0&&qs(fe,N,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function fc(x,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new hn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?qi:cn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=h.state.transmissionRenderTarget[H.id],fe=H.viewport||I;re.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);let Ee=b.getRenderTarget(),_e=b.getActiveCubeFace(),De=b.getActiveMipmapLevel();b.setRenderTarget(re),b.getClearColor(X),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&Te.render(V);let Ue=b.toneMapping;b.toneMapping=Cn;let we=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),$e===!0&&j.setGlobalState(b.clippingPlanes,H),qs(x,V,H),Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let tt=0,ht=N.length;tt<ht;tt++){let rt=N[tt],st=rt.object,Ie=rt.geometry,ot=rt.material,je=rt.group;if(ot.side===Jt&&st.layers.test(H.layers)){let Ot=ot.side;ot.side=Dt,ot.needsUpdate=!0,pc(st,V,H,Ie,ot,je),ot.side=Ot,ot.needsUpdate=!0,qe=!0}}qe===!0&&(Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re))}b.setRenderTarget(Ee,_e,De),b.setClearColor(X,J),we!==void 0&&(H.viewport=we),b.toneMapping=Ue}function qs(x,N,V){let H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,re=x.length;O<re;O++){let fe=x[O],Ee=fe.object,_e=fe.geometry,De=fe.group,Ue=fe.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),Ee.layers.test(V.layers)&&pc(Ee,N,V,_e,Ue,De)}}function pc(x,N,V,H,O,re){x.onBeforeRender(b,N,V,H,O,re),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(b,N,V,H,x,re),O.transparent===!0&&O.side===Jt&&O.forceSinglePass===!1?(O.side=Dt,O.needsUpdate=!0,b.renderBufferDirect(V,N,H,O,x,re),O.side=En,O.needsUpdate=!0,b.renderBufferDirect(V,N,H,O,x,re),O.side=Jt):b.renderBufferDirect(V,N,H,O,x,re),x.onAfterRender(b,N,V,H,O,re)}function Xs(x,N,V){N.isScene!==!0&&(N=Se);let H=Me.get(x),O=h.state.lights,re=h.state.shadowsArray,fe=O.state.version,Ee=F.getParameters(x,O.state,re,N,V),_e=F.getProgramCacheKey(Ee),De=H.programs;H.environment=x.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(x.isMeshStandardMaterial?Z:z).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,De===void 0&&(x.addEventListener("dispose",$),De=new Map,H.programs=De);let Ue=De.get(_e);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===fe)return gc(x,Ee),Ue}else Ee.uniforms=F.getUniforms(x),x.onBeforeCompile(Ee,b),Ue=F.acquireProgram(Ee,_e),De.set(_e,Ue),H.uniforms=Ee.uniforms;let we=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=j.uniform),gc(x,Ee),H.needsLights=yu(x),H.lightsStateVersion=fe,H.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function mc(x){if(x.uniformsList===null){let N=x.currentProgram.getUniforms();x.uniformsList=Ki.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function gc(x,N){let V=Me.get(x);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function _u(x,N,V,H,O){N.isScene!==!0&&(N=Se),Be.resetTextureUnits();let re=N.fog,fe=H.isMeshStandardMaterial?N.environment:null,Ee=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:si,_e=(H.isMeshStandardMaterial?Z:z).get(H.envMap||fe),De=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,tt=!!V.morphAttributes.color,ht=Cn;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=b.toneMapping);let rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=rt!==void 0?rt.length:0,Ie=Me.get(H),ot=h.state.lights;if($e===!0&&(K===!0||x!==y)){let Rt=x===y&&H.id===M;j.setState(H,x,Rt)}let je=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ot.state.version||Ie.outputColorSpace!==Ee||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==_e||H.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==j.numPlanes||Ie.numIntersection!==j.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Ue||Ie.morphTargets!==we||Ie.morphNormals!==qe||Ie.morphColors!==tt||Ie.toneMapping!==ht||Ie.morphTargetsCount!==st)&&(je=!0):(je=!0,Ie.__version=H.version);let Ot=Ie.currentProgram;je===!0&&(Ot=Xs(H,N,O));let yi=!1,Bt=!1,ss=!1,ct=Ot.getUniforms(),Xt=Ie.uniforms;if(be.useProgram(Ot.program)&&(yi=!0,Bt=!0,ss=!0),H.id!==M&&(M=H.id,Bt=!0),yi||y!==x){be.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ct.setValue(w,"projectionMatrix",x.projectionMatrix),ct.setValue(w,"viewMatrix",x.matrixWorldInverse);let Lt=ct.map.cameraPosition;Lt!==void 0&&Lt.setValue(w,xe.setFromMatrixPosition(x.matrixWorld)),Ce.logarithmicDepthBuffer&&ct.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Bt=!0,ss=!0)}if(O.isSkinnedMesh){ct.setOptional(w,O,"bindMatrix"),ct.setOptional(w,O,"bindMatrixInverse");let Rt=O.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(w,"boneTexture",Rt.boneTexture,Be))}O.isBatchedMesh&&(ct.setOptional(w,O,"batchingTexture"),ct.setValue(w,"batchingTexture",O._matricesTexture,Be),ct.setOptional(w,O,"batchingIdTexture"),ct.setValue(w,"batchingIdTexture",O._indirectTexture,Be),ct.setOptional(w,O,"batchingColorTexture"),O._colorsTexture!==null&&ct.setValue(w,"batchingColorTexture",O._colorsTexture,Be));let Yt=V.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&ne.update(O,V,Ot),(Bt||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,ct.setValue(w,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Xt.envMap.value=_e,Xt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Xt.envMapIntensity.value=N.environmentIntensity),Bt&&(ct.setValue(w,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&xu(Xt,ss),re&&H.fog===!0&&W.refreshFogUniforms(Xt,re),W.refreshMaterialUniforms(Xt,H,q,ae,h.state.transmissionRenderTarget[x.id]),Ki.upload(w,mc(Ie),Xt,Be)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ki.upload(w,mc(Ie),Xt,Be),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(w,"center",O.center),ct.setValue(w,"modelViewMatrix",O.modelViewMatrix),ct.setValue(w,"normalMatrix",O.normalMatrix),ct.setValue(w,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Rt=H.uniformsGroups;for(let Lt=0,Fa=Rt.length;Lt<Fa;Lt++){let Jn=Rt[Lt];Oe.update(Jn,Ot),Oe.bind(Jn,Ot)}}return Ot}function xu(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function yu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,N,V){let H=Me.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Me.get(x.texture).__webglTexture=N,Me.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){let V=Me.get(x);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let Mu=w.createFramebuffer();this.setRenderTarget=function(x,N=0,V=0){L=x,A=N,P=V;let H=!0,O=null,re=!1,fe=!1;if(x){let _e=Me.get(x);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)Be.setupRenderTarget(x);else if(_e.__hasExternalTextures)Be.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let we=x.depthTexture;if(_e.__boundDepthTexture!==we){if(we!==null&&Me.has(we)&&(x.width!==we.image.width||x.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(x)}}let De=x.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);let Ue=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?O=Ue[N][V]:O=Ue[N],re=!0):x.samples>0&&Be.useMultisampledRTT(x)===!1?O=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[V]:O=Ue,I.copy(x.viewport),U.copy(x.scissor),G=x.scissorTest}else I.copy(ge).multiplyScalar(q).floor(),U.copy(ze).multiplyScalar(q).floor(),G=Ke;if(V!==0&&(O=Mu),be.bindFramebuffer(w.FRAMEBUFFER,O)&&H&&be.drawBuffers(x,O),be.viewport(I),be.scissor(U),be.setScissorTest(G),re){let _e=Me.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,V)}else if(fe){let _e=N;for(let De=0;De<x.textures.length;De++){let Ue=Me.get(x.textures[De]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+De,Ue.__webglTexture,V,_e)}}else if(x!==null&&V!==0){let _e=Me.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_e.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(x,N,V,H,O,re,fe,Ee=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){be.bindFramebuffer(w.FRAMEBUFFER,_e);try{let De=x.textures[Ee],Ue=De.format,we=De.type;if(!Ce.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-H&&V>=0&&V<=x.height-O&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),w.readPixels(N,V,H,O,ye.convert(Ue),ye.convert(we),re))}finally{let De=L!==null?Me.get(L).__webglFramebuffer:null;be.bindFramebuffer(w.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(x,N,V,H,O,re,fe,Ee=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e)if(N>=0&&N<=x.width-H&&V>=0&&V<=x.height-O){be.bindFramebuffer(w.FRAMEBUFFER,_e);let De=x.textures[Ee],Ue=De.format,we=De.type;if(!Ce.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.bufferData(w.PIXEL_PACK_BUFFER,re.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),w.readPixels(N,V,H,O,ye.convert(Ue),ye.convert(we),0);let tt=L!==null?Me.get(L).__webglFramebuffer:null;be.bindFramebuffer(w.FRAMEBUFFER,tt);let ht=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Al(w,ht,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,re),w.deleteBuffer(qe),w.deleteSync(ht),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,V=0){let H=Math.pow(2,-V),O=Math.floor(x.image.width*H),re=Math.floor(x.image.height*H),fe=N!==null?N.x:0,Ee=N!==null?N.y:0;Be.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,V,0,0,fe,Ee,O,re),be.unbindTexture()};let Su=w.createFramebuffer(),bu=w.createFramebuffer();this.copyTextureToTexture=function(x,N,V=null,H=null,O=0,re=null){re===null&&(O!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let fe,Ee,_e,De,Ue,we,qe,tt,ht,rt=x.isCompressedTexture?x.mipmaps[re]:x.image;if(V!==null)fe=V.max.x-V.min.x,Ee=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,De=V.min.x,Ue=V.min.y,we=V.isBox3?V.min.z:0;else{let Yt=Math.pow(2,-O);fe=Math.floor(rt.width*Yt),Ee=Math.floor(rt.height*Yt),x.isDataArrayTexture?_e=rt.depth:x.isData3DTexture?_e=Math.floor(rt.depth*Yt):_e=1,De=0,Ue=0,we=0}H!==null?(qe=H.x,tt=H.y,ht=H.z):(qe=0,tt=0,ht=0);let st=ye.convert(N.format),Ie=ye.convert(N.type),ot;N.isData3DTexture?(Be.setTexture3D(N,0),ot=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Be.setTexture2DArray(N,0),ot=w.TEXTURE_2D_ARRAY):(Be.setTexture2D(N,0),ot=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);let je=w.getParameter(w.UNPACK_ROW_LENGTH),Ot=w.getParameter(w.UNPACK_IMAGE_HEIGHT),yi=w.getParameter(w.UNPACK_SKIP_PIXELS),Bt=w.getParameter(w.UNPACK_SKIP_ROWS),ss=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,rt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,rt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,De),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,we);let ct=x.isDataArrayTexture||x.isData3DTexture,Xt=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){let Yt=Me.get(x),Rt=Me.get(N),Lt=Me.get(Yt.__renderTarget),Fa=Me.get(Rt.__renderTarget);be.bindFramebuffer(w.READ_FRAMEBUFFER,Lt.__webglFramebuffer),be.bindFramebuffer(w.DRAW_FRAMEBUFFER,Fa.__webglFramebuffer);for(let Jn=0;Jn<_e;Jn++)ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(x).__webglTexture,O,we+Jn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,re,ht+Jn)),w.blitFramebuffer(De,Ue,fe,Ee,qe,tt,fe,Ee,w.DEPTH_BUFFER_BIT,w.NEAREST);be.bindFramebuffer(w.READ_FRAMEBUFFER,null),be.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||Me.has(x)){let Yt=Me.get(x),Rt=Me.get(N);be.bindFramebuffer(w.READ_FRAMEBUFFER,Su),be.bindFramebuffer(w.DRAW_FRAMEBUFFER,bu);for(let Lt=0;Lt<_e;Lt++)ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Yt.__webglTexture,O,we+Lt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Yt.__webglTexture,O),Xt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.__webglTexture,re,ht+Lt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Rt.__webglTexture,re),O!==0?w.blitFramebuffer(De,Ue,fe,Ee,qe,tt,fe,Ee,w.COLOR_BUFFER_BIT,w.NEAREST):Xt?w.copyTexSubImage3D(ot,re,qe,tt,ht+Lt,De,Ue,fe,Ee):w.copyTexSubImage2D(ot,re,qe,tt,De,Ue,fe,Ee);be.bindFramebuffer(w.READ_FRAMEBUFFER,null),be.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Xt?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(ot,re,qe,tt,ht,fe,Ee,_e,st,Ie,rt.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(ot,re,qe,tt,ht,fe,Ee,_e,st,rt.data):w.texSubImage3D(ot,re,qe,tt,ht,fe,Ee,_e,st,Ie,rt):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,re,qe,tt,fe,Ee,st,Ie,rt.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,re,qe,tt,rt.width,rt.height,st,rt.data):w.texSubImage2D(w.TEXTURE_2D,re,qe,tt,fe,Ee,st,Ie,rt);w.pixelStorei(w.UNPACK_ROW_LENGTH,je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ot),w.pixelStorei(w.UNPACK_SKIP_PIXELS,yi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ss),re===0&&N.generateMipmaps&&w.generateMipmap(ot),be.unbindTexture()},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&Be.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Be.setTextureCube(x,0):x.isData3DTexture?Be.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Be.setTexture2DArray(x,0):Be.setTexture2D(x,0),be.unbindTexture()},this.resetState=function(){A=0,P=0,L=null,be.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Da=class{constructor(e,t=[]){this.camera=e,this.obstacles=t,this.yaw=0,this.pitch=.4,this.distance=8,this.actualDistance=8,this.target=new B,this.initialized=!1,this.ray=new oi,this.ray.near=0,this.offset=new B,this.direction=new B,this.origin=new B,this.right=new B,this.up=new B,this.focus=new B,this.sampleOffsets=[[0,0],[.26,.2],[-.26,.2],[.26,-.2],[-.26,-.2]]}rotate(e,t){this.yaw=ui.euclideanModulo(this.yaw-e*.006+Math.PI,Math.PI*2)-Math.PI,this.pitch=ui.clamp(this.pitch+t*.004,.16,1.08)}zoom(e){Number.isFinite(e)&&e>0&&(this.distance=ui.clamp(this.distance*e,4,15))}recenter(e=Math.PI){this.yaw=e-Math.PI,this.pitch=.4}movement(e,t){let n=Math.cos(this.yaw),s=Math.sin(this.yaw);return{x:e*n+t*s,z:-e*s+t*n}}update(e,t,{snap:n=!1,reducedMotion:s=!1}={}){this.focus.copy(e),this.focus.y+=1.35,n||!this.initialized||s?this.target.copy(this.focus):this.target.lerp(this.focus,1-Math.exp(-14*t)),this.initialized=!0;let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=Math.sin(this.pitch),l=Math.cos(this.pitch);this.direction.set(r*l,o,a*l),this.right.set(a,0,-r),this.up.set(-r*o,l,-a*o);let c=this.distance;for(let[u,d]of this.sampleOffsets){this.origin.copy(this.target).addScaledVector(this.right,u).addScaledVector(this.up,d),this.ray.set(this.origin,this.direction),this.ray.far=this.distance+.35;let f=this.ray.intersectObjects(this.obstacles,!1)[0];f&&(c=Math.min(c,Math.max(.6,f.distance-.4)))}n||c<this.actualDistance||s?this.actualDistance=c:this.actualDistance=ui.lerp(this.actualDistance,c,1-Math.exp(-5*t)),this.offset.copy(this.direction).multiplyScalar(this.actualDistance),this.camera.position.copy(this.target).add(this.offset),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}};function ru(i,e,{onTap:t=()=>{},blocked:n=()=>!1}={}){let s=new Map,r=0,a=()=>{let[p,v]=[...s.values()];return p&&v?Math.hypot(p.x-v.x,p.y-v.y):0},o=p=>{n()||p.button===1||(p.preventDefault(),s.set(p.pointerId,{x:p.clientX,y:p.clientY,startX:p.clientX,startY:p.clientY,button:p.button,moved:!1}),i.setPointerCapture?.(p.pointerId),s.size>1&&(s.forEach(v=>v.moved=!0),r=a()))},l=p=>{let v=s.get(p.pointerId);if(!v||n())return;p.preventDefault();let S=p.clientX-v.x,g=p.clientY-v.y;if(v.x=p.clientX,v.y=p.clientY,s.size>1){let h=a();r>0&&h>0&&e.zoom(r/h),r=h;return}!v.moved&&Math.hypot(v.x-v.startX,v.y-v.startY)>5?(v.moved=!0,e.rotate(v.x-v.startX,v.y-v.startY)):v.moved&&e.rotate(S,g)},c=p=>{let v=s.get(p.pointerId);if(!v)return;s.delete(p.pointerId),r=0;let S=v.moved||Math.hypot(p.clientX-v.startX,p.clientY-v.startY)>5;p.type==="pointerup"&&!S&&v.button===0&&!n()&&t(p.clientX,p.clientY),i.hasPointerCapture?.(p.pointerId)&&i.releasePointerCapture(p.pointerId)},u=p=>{n()||(p.preventDefault(),e.zoom(Math.exp(ui.clamp(p.deltaY,-200,200)*.0015)))},d=p=>p.preventDefault(),f=()=>{s.clear(),r=0};i.addEventListener("pointerdown",o),i.addEventListener("pointermove",l);for(let p of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(p,c);return i.addEventListener("wheel",u,{passive:!1}),i.addEventListener("contextmenu",d),{cancel:f}}var ut=[],Pe=(i,e,t,n,s,r="")=>ut.push({id:ut.length+1,title:i,category:e,level:Math.floor(ut.length/10)+1,symptom:t,steps:n,confirm:s,note:r});Pe("Computador n\xE3o liga ao apertar Power","Energia","Nenhuma luz acende e nenhuma ventoinha gira ao pressionar o bot\xE3o.",[["Tomada sem energia","Teste a tomada com um aparelho que voc\xEA sabe que funciona; n\xE3o introduza objetos nela.","Use outra tomada comprovadamente energizada. Se houver defeito na instala\xE7\xE3o, chame o respons\xE1vel."],["Cabo de for\xE7a desconectado da tomada","Observe se o plugue est\xE1 encaixado na tomada ou no filtro de linha.","Conecte o cabo corretamente; se usar filtro de linha, confira se ele est\xE1 ligado."],["Cabo desconectado da fonte","Observe a conex\xE3o na parte traseira do gabinete.","Com a alimenta\xE7\xE3o desligada, encaixe o cabo firmemente na fonte."],["Interruptor traseiro da fonte desligado","Se houver chave I/O, veja se est\xE1 em O. I/O n\xE3o \xE9 o seletor 115/230 V.","Coloque a chave I/O em I. Nunca mude o seletor de tens\xE3o por tentativa."],["Cabo de for\xE7a danificado","Inspecione o cabo desligado. Se n\xE3o houver dano vis\xEDvel, compare com outro compat\xEDvel e comprovadamente bom.","Substitua o cabo danificado ou que falhou no teste."],["Fonte ausente ou conex\xF5es internas soltas","Com o professor e o PC fora da tomada, confirme a presen\xE7a da fonte e os conectores da placa-m\xE3e, conforme o manual.","Se faltar fonte, instale uma compat\xEDvel. Se houver conex\xE3o solta, reconecte o conector correto."],["Falha da fonte, bot\xE3o ou placa-m\xE3e","Depois das etapas anteriores, o professor testa uma fonte compat\xEDvel conhecida e verifica o cabo do bot\xE3o no manual.","Substitua apenas a pe\xE7a cuja falha foi isolada. Encaminhe a placa-m\xE3e para diagn\xF3stico se persistir."]],"O computador volta a responder ao Power e come\xE7a a inicializa\xE7\xE3o.","Abrir a fonte n\xE3o faz parte do diagn\xF3stico. Ventoinha da fonte parada, sozinha, n\xE3o comprova defeito: alguns modelos t\xEAm modo sem rota\xE7\xE3o.");Pe("Monitor n\xE3o acende","V\xEDdeo","O monitor n\xE3o mostra imagem nem seu pr\xF3prio menu.",[["Monitor desligado","Aperte o bot\xE3o do monitor e procure o LED de energia.","Ligue o monitor."],["Cabo de energia mal conectado","Inspecione os dois extremos do cabo e a tomada.","Reconecte o cabo e use tomada energizada."],["Fonte externa ou cabo defeituoso","Se o monitor usa adaptador, compare apenas com modelo de tens\xE3o, polaridade e corrente compat\xEDveis.","Substitua o cabo ou adaptador cuja falha foi confirmada."],["Falha no monitor","Teste o monitor em outro computador e tente abrir o menu sem o cabo de v\xEDdeo.","Se continuar sem menu nem alimenta\xE7\xE3o, encaminhe para reparo ou substitua."]],"O menu pr\xF3prio do monitor aparece e o LED indica alimenta\xE7\xE3o.","N\xE3o abra o monitor: h\xE1 circuitos com tens\xE3o perigosa.");Pe("PC liga, mas o monitor mostra \u201Csem sinal\u201D","V\xEDdeo","H\xE1 luzes ou ventoinhas no gabinete, mas o monitor n\xE3o recebe v\xEDdeo.",[["Entrada de v\xEDdeo incorreta","Abra o menu do monitor e compare a entrada selecionada com o cabo usado.","Selecione HDMI, DisplayPort ou outra entrada realmente conectada."],["Cabo de v\xEDdeo solto ou defeituoso","Confira as duas pontas; teste outro cabo compat\xEDvel.","Reconecte ou substitua o cabo que falhou."],["Cabo na sa\xEDda de v\xEDdeo errada","Se h\xE1 placa de v\xEDdeo dedicada, confira se o cabo est\xE1 ligado nela. A sa\xEDda da placa-m\xE3e depende de v\xEDdeo integrado e configura\xE7\xE3o.","Conecte \xE0 sa\xEDda adequada ao conjunto instalado."],["Falha do monitor ou aus\xEAncia de POST","Teste outro monitor. Se nenhum recebe imagem, observe LEDs e bipes de diagn\xF3stico e consulte o caso 41.","Isole primeiro monitor/cabo; com o professor, investigue mem\xF3ria e v\xEDdeo se o PC n\xE3o concluir o autoteste."]],"A imagem de inicializa\xE7\xE3o aparece e o sistema pode ser exibido.","Ventoinhas girando n\xE3o garantem que o computador concluiu o POST.");Pe("Imagem pisca ou some durante o uso","V\xEDdeo","A tela perde a imagem por instantes, embora o computador continue funcionando.",[["Conex\xE3o frouxa","Confira se o cabo est\xE1 firme nas duas pontas, sem pux\xE1-lo lateralmente.","Reconecte e deixe folga no cabo."],["Cabo ou adaptador com defeito","Teste conex\xE3o direta e outro cabo compat\xEDvel com a resolu\xE7\xE3o usada.","Troque o cabo/adaptador que reproduz a falha."],["Resolu\xE7\xE3o ou frequ\xEAncia inadequada","Compare os ajustes de tela com as especifica\xE7\xF5es do monitor.","Use uma resolu\xE7\xE3o e frequ\xEAncia suportadas."],["Driver ou hardware de v\xEDdeo inst\xE1vel","Observe se come\xE7ou ap\xF3s atualiza\xE7\xE3o; compare com outro monitor e consulte os casos 37 e 44.","Reinstale ou reverta o driver oficial se houver rela\xE7\xE3o. Se persistir, pe\xE7a diagn\xF3stico da GPU."]],"A imagem permanece est\xE1vel no mesmo per\xEDodo e tarefa que antes provocavam a falha.");Pe("Imagem esticada, grande ou pouco n\xEDtida","V\xEDdeo","O sistema aparece, mas letras e propor\xE7\xF5es est\xE3o incorretas.",[["Resolu\xE7\xE3o diferente da nativa","Consulte a resolu\xE7\xE3o recomendada nas configura\xE7\xF5es de tela e no manual.","Ajuste para a resolu\xE7\xE3o nativa suportada pelo monitor."],["Escala de interface inadequada","Confira o ajuste de escala do sistema.","Escolha uma escala confort\xE1vel; compare sem mudar v\xE1rias op\xE7\xF5es ao mesmo tempo."],["Configura\xE7\xE3o do monitor incorreta","Confira propor\xE7\xE3o da imagem e ajustes do pr\xF3prio monitor.","Restaure a propor\xE7\xE3o correta; para VGA, use o ajuste autom\xE1tico do monitor se dispon\xEDvel."],["Driver de v\xEDdeo ausente ou incorreto","Veja se o sistema usa um driver b\xE1sico e se faltam op\xE7\xF5es de resolu\xE7\xE3o.","Instale o driver oficial compat\xEDvel com a GPU e o sistema."]],"Texto fica leg\xEDvel, c\xEDrculos ficam circulares e a resolu\xE7\xE3o correta est\xE1 dispon\xEDvel.");Pe("Teclado n\xE3o responde","Perif\xE9ricos","As teclas n\xE3o produzem resposta no sistema.",[["Conex\xE3o ou alimenta\xE7\xE3o ausente","Confira USB; se for sem fio, verifique pilhas, chave e receptor.","Reconecte, ligue ou substitua as pilhas."],["Porta ou intermedi\xE1rio com problema","Teste uma porta USB traseira, diretamente no PC, sem hub.","Use a porta funcional e retire o hub defeituoso."],["Falha do pr\xF3prio teclado","Teste o teclado em outro PC e outro teclado neste PC.","Substitua o teclado se a falha acompanh\xE1-lo."],["Problema no sistema ou controlador USB","Compare a resposta na BIOS/UEFI e no sistema, com apoio do professor.","Se funciona antes do sistema, revise drivers e configura\xE7\xF5es. Se v\xE1rias portas falham, encaminhe o controlador para diagn\xF3stico."]],"O teclado digita corretamente e responde ap\xF3s uma nova inicializa\xE7\xE3o.","Conectores PS/2 devem ser reconectados com o computador desligado.");Pe("Mouse n\xE3o move o ponteiro","Perif\xE9ricos","O ponteiro fica parado ou o mouse n\xE3o \xE9 reconhecido.",[["Mouse sem energia ou desconectado","Confira cabo, receptor USB, pilha e bot\xE3o liga/desliga.","Conecte e ligue o mouse; troque a pilha se necess\xE1rio."],["Sensor obstru\xEDdo ou superf\xEDcie inadequada","Observe a base e teste em superf\xEDcie opaca uniforme.","Limpe externamente o sensor com cuidado e use um mousepad adequado."],["Porta USB ou hub com falha","Teste diretamente numa USB traseira.","Use uma porta funcional ou substitua o hub confirmado como defeituoso."],["Defeito no mouse ou falha de software","Compare com outro mouse e teste este em outro computador.","Troque o mouse se a falha o acompanhar; se s\xF3 ocorre neste sistema, revise o driver e as op\xE7\xF5es de acessibilidade."]],"O ponteiro se move de forma cont\xEDnua e os cliques funcionam.");Pe("Computador n\xE3o emite som","\xC1udio","Um \xE1udio est\xE1 sendo reproduzido, mas n\xE3o \xE9 ouvido.",[["Volume zerado ou silenciado","Confira o volume do sistema, do aplicativo e da caixa de som.","Remova o sil\xEAncio e aumente gradualmente o volume."],["Caixa ou fone desconectado","Confira energia da caixa e conex\xE3o na sa\xEDda de \xE1udio correta.","Ligue a caixa e conecte ao conector de sa\xEDda indicado no manual."],["Dispositivo de sa\xEDda errado","Observe se o sistema envia \xE1udio ao monitor HDMI, Bluetooth ou outra sa\xEDda.","Selecione a sa\xEDda onde est\xE1 seu fone ou caixa."],["Falha do acess\xF3rio ou driver","Teste outro fone e observe o dispositivo no gerenciador do sistema.","Troque o acess\xF3rio que falhou; instale o driver oficial se o dispositivo n\xE3o estiver corretamente reconhecido."]],"Um som de teste \xE9 ouvido no dispositivo escolhido.");Pe("Fone ou microfone do painel frontal n\xE3o funciona","\xC1udio","As conex\xF5es frontais falham, mas as traseiras podem funcionar.",[["Plugue ou conector inadequado","Confira se est\xE1 na entrada correta e se o fone combinado precisa de adaptador compat\xEDvel.","Use a conex\xE3o adequada; entrada de microfone n\xE3o \xE9 sa\xEDda de fone."],["Entrada/sa\xEDda frontal n\xE3o selecionada","Confira as op\xE7\xF5es de \xE1udio e a detec\xE7\xE3o do conector.","Selecione o dispositivo frontal correto e ajuste a detec\xE7\xE3o conforme o software oficial."],["Defeito no fone ou no conector frontal","Teste o mesmo fone atr\xE1s e outro fone na frente.","Substitua o acess\xF3rio defeituoso ou encaminhe o conector frontal se s\xF3 ele falhar."],["Cabo interno HD AUDIO solto","Com o professor, PC fora da tomada, localize o cabo e o header pelo manual.","Reconecte no header de \xE1udio correto. N\xE3o use por tentativa os headers USB."]],"As conex\xF5es frontais reproduzem ou capturam \xE1udio conforme sua fun\xE7\xE3o.");Pe("Sem acesso \xE0 rede pelo cabo","Rede","O computador n\xE3o acessa a rede usando Ethernet.",[["Cabo de rede desconectado","Confira as duas pontas e os indicadores de link, quando existirem.","Encaixe o cabo na porta do PC e do switch/roteador."],["Cabo ou porta de rede com defeito","Teste cabo conhecido e outra porta do switch.","Troque o cabo ou use a porta funcional."],["Adaptador desativado","Confira se a interface Ethernet est\xE1 habilitada no sistema.","Habilite o adaptador; se n\xE3o for reconhecido, instale o driver oficial."],["Falha na rede ou na configura\xE7\xE3o IP","Compare com outro computador na mesma rede e consulte o caso 22.","Use configura\xE7\xE3o autom\xE1tica se a rede fornece DHCP; encaminhe falhas gerais ao respons\xE1vel pela rede."]],"O computador obt\xE9m uma configura\xE7\xE3o de rede v\xE1lida e acessa os recursos autorizados.");Pe("Wi-Fi n\xE3o aparece ou n\xE3o conecta","Rede","O desktop n\xE3o mostra redes sem fio ou n\xE3o consegue entrar na rede.",[["Desktop sem adaptador Wi-Fi","Confira se h\xE1 adaptador instalado; muitos desktops t\xEAm apenas Ethernet.","Use Ethernet ou instale um adaptador Wi-Fi compat\xEDvel."],["Wi-Fi desligado ou antena ausente","Confira modo avi\xE3o, Wi-Fi e antenas externas do adaptador.","Ative o Wi-Fi e conecte as antenas previstas pelo fabricante."],["Senha errada ou sinal fraco","Confirme a rede, digite novamente a senha autorizada e teste mais perto do roteador.","Corrija a credencial e reposicione o computador ou ponto de acesso."],["Driver ou incompatibilidade de banda","Veja se o adaptador aparece no sistema e suporta a banda da rede.","Instale o driver oficial; escolha uma rede/banda compat\xEDvel ou encaminhe o roteador ao respons\xE1vel."]],"A rede conecta e permanece est\xE1vel em um teste de navega\xE7\xE3o.");Pe("Pendrive n\xE3o aparece no explorador","Armazenamento","O pendrive est\xE1 conectado, mas n\xE3o aparece entre as unidades.",[["Conex\xE3o inadequada","Retire com seguran\xE7a se detectado e teste numa USB traseira sem hub.","Reconecte numa porta funcional."],["Falha do pendrive","Teste em outro PC e compare com outro pendrive na mesma porta.","Substitua a unidade se a falha a acompanhar; se houver arquivos importantes, priorize recupera\xE7\xE3o."],["Unidade sem letra","Com o professor, localize a unidade pelo tamanho no gerenciamento de discos.","Se h\xE1 parti\xE7\xE3o saud\xE1vel sem letra, atribua uma letra livre. N\xE3o inicialize nem formate uma unidade com dados."],["Sistema de arquivos danificado ou incompat\xEDvel","Observe se aparece RAW, n\xE3o alocado ou com sistema de arquivos n\xE3o suportado.","N\xE3o aceite formata\xE7\xE3o autom\xE1tica. Fa\xE7a backup/recupera\xE7\xE3o; s\xF3 depois prepare a unidade para o sistema correto."]],"A unidade aparece e arquivos de teste podem ser lidos; a remo\xE7\xE3o segura funciona.","Se o conte\xFAdo for importante, interrompa tentativas de escrita na unidade defeituosa.");Pe("Impressora n\xE3o imprime a partir do desktop","Perif\xE9ricos","O trabalho \xE9 enviado, mas a impress\xE3o n\xE3o sai.",[["Impressora sem condi\xE7\xF5es de imprimir","Confira energia, papel, tampa e avisos no painel.","Ligue e resolva o aviso f\xEDsico indicado, conforme o manual."],["Impressora errada ou conex\xE3o ausente","Confira a impressora escolhida e o cabo USB ou rede.","Selecione a impressora correta e restaure a conex\xE3o."],["Fila pausada ou trabalho travado","Veja a fila de impress\xE3o e o estado offline/pausado.","Retome a fila; cancele somente os trabalhos de teste travados e reenvie uma p\xE1gina."],["Driver ou servi\xE7o com falha","Teste uma p\xE1gina interna da impressora e uma p\xE1gina pelo sistema.","Se a p\xE1gina interna sai, revise driver oficial, porta e servi\xE7o de impress\xE3o com o professor."]],"Uma p\xE1gina de teste enviada pelo computador \xE9 impressa.");Pe("Webcam n\xE3o mostra imagem","Perif\xE9ricos","O aplicativo abre, mas a imagem da c\xE2mera n\xE3o aparece.",[["Tampa de privacidade ou conex\xE3o","Confira a tampa f\xEDsica e o cabo USB.","Abra a tampa e conecte a c\xE2mera diretamente ao PC."],["C\xE2mera errada selecionada","Observe o dispositivo escolhido no aplicativo.","Selecione a webcam correta."],["Permiss\xE3o bloqueada ou c\xE2mera ocupada","Confira as permiss\xF5es de c\xE2mera e feche outro aplicativo que esteja usando-a.","Autorize o aplicativo necess\xE1rio e deixe a c\xE2mera livre para o teste."],["Driver ou c\xE2mera defeituosa","Teste outro aplicativo, porta USB e outro PC.","Atualize o driver oficial se necess\xE1rio; substitua a c\xE2mera se a falha a acompanhar."]],"A c\xE2mera mostra uma imagem no aplicativo autorizado.");Pe("Microfone n\xE3o capta voz","\xC1udio","A pessoa fala, mas o indicador de entrada n\xE3o se move.",[["Microfone silenciado ou desconectado","Confira bot\xE3o de mute, plugue e alimenta\xE7\xE3o quando aplic\xE1vel.","Remova o mute e conecte \xE0 entrada correta."],["Entrada ou n\xEDvel de captura incorreto","Confira o dispositivo selecionado e o n\xEDvel de entrada.","Escolha o microfone correto e ajuste o n\xEDvel sem saturar."],["Permiss\xE3o ou configura\xE7\xE3o do aplicativo","Teste a grava\xE7\xE3o do sistema e confira a permiss\xE3o do aplicativo.","Autorize o uso e selecione a entrada no aplicativo."],["Plugue incompat\xEDvel, driver ou defeito","Compare um microfone conhecido; headsets combinados podem precisar de adaptador adequado.","Use adaptador compat\xEDvel, revise o driver oficial ou substitua o acess\xF3rio cuja falha foi confirmada."]],"Uma grava\xE7\xE3o curta reproduz a voz com clareza.");Pe("Segundo monitor n\xE3o \xE9 reconhecido","V\xEDdeo","S\xF3 um monitor funciona num desktop com dois monitores conectados.",[["Monitor ou entrada desligada","Confira energia e entrada do segundo monitor.","Ligue e selecione a entrada conectada."],["Modo de exibi\xE7\xE3o inadequado","Abra as op\xE7\xF5es de m\xFAltiplos monitores do sistema.","Escolha estender ou duplicar e use a op\xE7\xE3o de detectar."],["Cabo, adaptador ou porta inadequados","Teste o segundo monitor sozinho e confira o sentido de convers\xE3o do adaptador.","Use cabo/adaptador apropriado. Um divisor simples n\xE3o cria duas telas independentes."],["Limite de GPU ou sa\xEDda da placa-m\xE3e indispon\xEDvel","Consulte o n\xFAmero de telas suportadas e a disponibilidade do v\xEDdeo integrado.","Conecte a sa\xEDdas suportadas; revise driver e configura\xE7\xE3o conforme o manual."]],"As duas telas aparecem nas configura\xE7\xF5es e operam no modo escolhido.");Pe("Data e hora ficam incorretas","Sistema","O rel\xF3gio mostra hor\xE1rio errado ou perde o ajuste depois de desligar.",[["Fuso hor\xE1rio incorreto","Confira fuso e hora autom\xE1tica no sistema.","Selecione o fuso correto e sincronize a hora."],["Sincroniza\xE7\xE3o indispon\xEDvel","Confira a conex\xE3o e o servi\xE7o de hora; compare com rel\xF3gio confi\xE1vel.","Restaure a sincroniza\xE7\xE3o autorizada ou ajuste temporariamente a hora."],["Hora perdida tamb\xE9m na BIOS/UEFI","Com o professor, confira a hora da BIOS depois de o PC ficar sem energia.","Se a hora do firmware permanece correta, investigue o sistema; se \xE9 perdida, avance para a bateria."],["Bateria da placa-m\xE3e esgotada","Confirme o tipo no manual e registre as configura\xE7\xF5es antes da interven\xE7\xE3o.","Com supervis\xE3o e PC desconectado, substitua por bateria correta, respeitando polaridade; reconfigure data e op\xE7\xF5es necess\xE1rias."]],"O rel\xF3gio permanece correto ap\xF3s desligar e religar, inclusive depois do teste sem energia.");Pe("Computador demora muito para iniciar","Sistema","A inicializa\xE7\xE3o chega ao sistema, mas leva tempo excessivo.",[["Perif\xE9rico atrasando a partida","Compare a inicializa\xE7\xE3o sem pendrives e acess\xF3rios n\xE3o essenciais.","Remova o acess\xF3rio problem\xE1tico e revise sua configura\xE7\xE3o."],["Muitos aplicativos iniciando juntos","Observe aplicativos de inicializa\xE7\xE3o e seu impacto.","Desative apenas os desnecess\xE1rios; mantenha prote\xE7\xE3o e servi\xE7os essenciais."],["Pouco espa\xE7o ou atualiza\xE7\xE3o em andamento","Confira espa\xE7o livre e estado das atualiza\xE7\xF5es.","Libere espa\xE7o com ferramentas do sistema e deixe a atualiza\xE7\xE3o terminar."],["Armazenamento lento ou falhando","Fa\xE7a backup e compare sa\xFAde da unidade e uso de disco ap\xF3s iniciar.","Se a unidade falha, substitua ap\xF3s preservar os dados; se \xE9 apenas limita\xE7\xE3o de HDD, avalie SSD compat\xEDvel."]],"O tempo de partida melhora em duas inicializa\xE7\xF5es compar\xE1veis, sem remover servi\xE7os essenciais.");Pe("Computador fica lento durante o uso","Sistema","Programas abrem devagar e o sistema responde com atraso.",[["Excesso de tarefas abertas","Observe CPU, mem\xF3ria e disco no monitor de tarefas.","Feche tarefas n\xE3o utilizadas e compare o desempenho."],["Armazenamento quase cheio","Confira espa\xE7o dispon\xEDvel no disco do sistema.","Remova arquivos tempor\xE1rios com ferramenta do sistema e mova arquivos pr\xF3prios ap\xF3s backup."],["Aplicativo consumindo recursos ou malware","Identifique o processo de maior consumo e fa\xE7a uma verifica\xE7\xE3o com prote\xE7\xE3o confi\xE1vel.","Atualize ou corrija o aplicativo; siga o caso 26 se houver infec\xE7\xE3o."],["Limite de hardware, calor ou unidade com falha","Compare o consumo com os requisitos dos programas, temperaturas e sa\xFAde do disco.","Corrija a causa confirmada; amplie RAM/SSD se houver limita\xE7\xE3o, ou siga os casos de calor e armazenamento."]],"A tarefa usada como refer\xEAncia volta a responder bem; registre qual recurso causava a lentid\xE3o.");Pe("Um programa trava ou fecha sozinho","Sistema","Um aplicativo espec\xEDfico para de responder, enquanto outros podem continuar funcionando.",[["Arquivo ou opera\xE7\xE3o espec\xEDfica com erro","Teste um arquivo novo e registre a a\xE7\xE3o que provoca o travamento.","Recupere o arquivo de backup ou evite a opera\xE7\xE3o at\xE9 corrigir o problema identificado."],["Recursos insuficientes","Confira espa\xE7o, mem\xF3ria e os requisitos do aplicativo.","Feche tarefas desnecess\xE1rias e libere espa\xE7o; ajuste a carga ao hardware."],["Vers\xE3o, extens\xE3o ou instala\xE7\xE3o com problema","Teste sem extens\xF5es opcionais e veja se come\xE7ou ap\xF3s uma mudan\xE7a.","Atualize pelo fornecedor ou repare/reinstale o aplicativo ap\xF3s salvar dados e configura\xE7\xF5es."],["Problema geral de sistema ou hardware","Observe se v\xE1rios programas tamb\xE9m travam e consulte registros de erros.","Se a falha \xE9 geral, siga os casos 36, 43 e 46 com o professor."]],"A mesma a\xE7\xE3o que antes travava funciona em testes repetidos, sem perda dos arquivos.");Pe("Windows chega a uma tela de recupera\xE7\xE3o","Inicializa\xE7\xE3o","O computador liga, mas n\xE3o carrega normalmente o Windows.",[["Dispositivo externo interferindo","Retire m\xEDdias remov\xEDveis e registre a mensagem completa.","Reinicie sem m\xEDdias n\xE3o essenciais; se resolver, revise a ordem de boot."],["Falha na inicializa\xE7\xE3o do sistema","Confira se a unidade do sistema \xE9 detectada e use as op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Com o professor, tente Reparo de Inicializa\xE7\xE3o. Se o disco n\xE3o \xE9 detectado, siga o caso 29."],["Atualiza\xE7\xE3o ou driver recente","Veja se o problema come\xE7ou logo ap\xF3s uma mudan\xE7a. Tenha a chave de recupera\xE7\xE3o se houver criptografia.","Use as op\xE7\xF5es apropriadas de desinstalar atualiza\xE7\xE3o ou Restaura\xE7\xE3o do Sistema, ap\xF3s avaliar o backup."],["Sistema corrompido ou disco defeituoso","Preserve dados e verifique a sa\xFAde da unidade antes de reinstalar.","Se o disco estiver saud\xE1vel, repare/reinstale o sistema ap\xF3s backup. Se falha, substitua a unidade antes da instala\xE7\xE3o."]],"O sistema inicia, os arquivos preservados est\xE3o acess\xEDveis e a falha n\xE3o reaparece.","Op\xE7\xF5es de recupera\xE7\xE3o podem alterar dados e aplicativos. Obtenha backup e chave de recupera\xE7\xE3o antes de procedimentos invasivos.");Pe("Rede conecta, mas n\xE3o abre a internet","Rede","A interface tem link ou Wi-Fi conectado, mas os sites n\xE3o abrem.",[["Falha geral da rede","Teste outro dispositivo na mesma rede e mais de um site.","Se todos falham, encaminhe o roteador/provedor ao respons\xE1vel; se s\xF3 um site falha, n\xE3o altere todo o PC."],["Endere\xE7o IP ou gateway inv\xE1lido","Com o professor, veja IP, m\xE1scara e gateway; 169.254.x.x costuma indicar que o DHCP n\xE3o forneceu endere\xE7o.","Use DHCP se previsto pela rede e renove a conex\xE3o; corrija IP fixo somente com os dados do administrador."],["Falha na resolu\xE7\xE3o de nomes (DNS)","Compare conectividade com o gateway e resolu\xE7\xE3o de nomes, usando testes orientados.","Restaure o DNS previsto pela rede; n\xE3o coloque servidores aleat\xF3rios numa rede escolar."],["Proxy, VPN ou bloqueio de seguran\xE7a","Confira se come\xE7ou ap\xF3s ativar VPN/proxy e verifique as regras da rede.","Corrija a configura\xE7\xE3o autorizada ou encaminhe ao administrador. N\xE3o desative a prote\xE7\xE3o como solu\xE7\xE3o permanente."]],"Sites e servi\xE7os autorizados abrem; o aluno diferencia link, IP e DNS.");Pe("Conex\xE3o de rede cai frequentemente","Rede","O acesso funciona por um tempo e depois \xE9 interrompido.",[["Mau contato ou sinal fraco","Em Ethernet, confira encaixes; no Wi-Fi, compare perto do roteador.","Troque cabo comprovadamente ruim ou melhore o posicionamento das antenas."],["Falha no equipamento de rede","Compare outros dispositivos e outra porta do switch.","Use a porta funcional e informe quedas gerais ao respons\xE1vel pela rede."],["Economia de energia ou driver do adaptador","Observe se a queda ocorre ap\xF3s inatividade e confira o driver oficial.","Atualize o driver e ajuste a economia de energia conforme a orienta\xE7\xE3o do fabricante."],["Defeito no adaptador","Teste um adaptador compat\xEDvel conhecido sob as mesmas condi\xE7\xF5es.","Substitua o adaptador apenas se o teste isolar a falha nele."]],"A conex\xE3o permanece est\xE1vel no intervalo e atividade que antes causavam a queda.");Pe("Bluetooth n\xE3o encontra ou n\xE3o conecta o acess\xF3rio","Perif\xE9ricos","Um fone, teclado ou mouse Bluetooth n\xE3o aparece ou falha ao parear.",[["Desktop sem Bluetooth ou r\xE1dio desligado","Confira se o PC tem adaptador e se Bluetooth est\xE1 ativado.","Ative o recurso ou instale adaptador compat\xEDvel."],["Acess\xF3rio fora do modo de pareamento","Confira carga e siga o procedimento do fabricante.","Carregue e coloque o acess\xF3rio em modo de pareamento perto do PC."],["Pareamento antigo ou liga\xE7\xE3o a outro dispositivo","Veja se o acess\xF3rio est\xE1 conectado a outro aparelho.","Desconecte do outro aparelho e refa\xE7a apenas o pareamento desse acess\xF3rio."],["Driver, antena ou adaptador com falha","Teste outro acess\xF3rio e confira driver e antenas compartilhadas, se previstas.","Instale o driver oficial, conecte antenas ou substitua o adaptador cuja falha foi confirmada."]],"O acess\xF3rio pareia e executa sua fun\xE7\xE3o ap\xF3s uma reconex\xE3o.");Pe("Disco do sistema est\xE1 quase cheio","Armazenamento","O sistema avisa falta de espa\xE7o e pode falhar ao instalar programas.",[["Lixeira e arquivos tempor\xE1rios acumulados","Confira o uso de armazenamento e revise a lixeira antes de apagar.","Use a limpeza do sistema e exclua apenas itens dispens\xE1veis."],["Arquivos pessoais grandes","Identifique v\xEDdeos, downloads e outros arquivos pr\xF3prios.","Fa\xE7a backup e mova o que n\xE3o precisa ficar no disco principal."],["Programas desnecess\xE1rios","Confira programas instalados e tamanho ocupado.","Desinstale pelos recursos do sistema o que n\xE3o ser\xE1 usado, preservando dados necess\xE1rios."],["Capacidade insuficiente para a rotina","Compare o espa\xE7o exigido pela turma com o dispon\xEDvel ap\xF3s a limpeza.","Planeje unidade maior compat\xEDvel e migra\xE7\xE3o com backup. N\xE3o apague pastas do sistema manualmente."]],"H\xE1 espa\xE7o para o uso e as atualiza\xE7\xF5es previstas, e os arquivos necess\xE1rios continuam acess\xEDveis.");Pe("Propagandas estranhas e programas desconhecidos","Sistema","Aparecem redirecionamentos, extens\xF5es desconhecidas ou alertas suspeitos.",[["Notifica\xE7\xF5es autorizadas por engano","Identifique se o alerta vem do navegador e de qual site.","Revogue a permiss\xE3o do site desconhecido; n\xE3o clique no alerta."],["Extens\xE3o ou programa indesejado","Revise extens\xF5es e instala\xE7\xF5es recentes com o professor.","Remova itens indesejados pelos mecanismos oficiais."],["Poss\xEDvel infec\xE7\xE3o","Atualize a prote\xE7\xE3o confi\xE1vel e execute uma verifica\xE7\xE3o completa; isole da rede se houver comportamento ativo suspeito.","Siga as a\xE7\xF5es de quarentena da prote\xE7\xE3o e a pol\xEDtica do laborat\xF3rio."],["Comprometimento persistente","Se retorna, preserve documentos com cuidado e avalie a integridade do sistema.","Encaminhe ao respons\xE1vel; uma reinstala\xE7\xE3o limpa pode ser necess\xE1ria ap\xF3s backup verificado. Troque senhas num dispositivo confi\xE1vel se houve exposi\xE7\xE3o."]],"A prote\xE7\xE3o conclui a verifica\xE7\xE3o e os sintomas n\xE3o retornam ap\xF3s reiniciar e testar o navegador.","N\xE3o instale \u201Climpadores\u201D anunciados pelos pr\xF3prios alertas. Em m\xE1quinas da escola, informe o respons\xE1vel pelo laborat\xF3rio.");Pe("Windows Update falha repetidamente","Sistema","Uma atualiza\xE7\xE3o n\xE3o instala e mostra uma mensagem ou c\xF3digo de erro.",[["Reinicializa\xE7\xE3o pendente","Confira o aviso de reiniciar e registre o c\xF3digo de erro.","Salve o trabalho e reinicie pelo sistema."],["Internet, hora ou espa\xE7o inadequados","Confira rede, rel\xF3gio e espa\xE7o livre.","Corrija conex\xE3o/hora e libere espa\xE7o com ferramentas do sistema."],["Erro detect\xE1vel pelo solucionador oficial","Execute a ferramenta de solu\xE7\xE3o de problemas de atualiza\xE7\xE3o dispon\xEDvel no sistema.","Aplique a corre\xE7\xE3o indicada e tente novamente."],["Arquivos do sistema ou pacote com falha","Pesquise o c\xF3digo na documenta\xE7\xE3o oficial com o professor e preserve os dados.","Fa\xE7a o reparo recomendado pelo fornecedor. Se houver falha de disco, trate a unidade antes de insistir."]],"A atualiza\xE7\xE3o prevista conclui e o sistema reinicia normalmente.","N\xE3o desligue \xE0 for\xE7a enquanto a instala\xE7\xE3o estiver progredindo.");Pe("Mensagem \u201CNo bootable device\u201D ou \u201CBoot device not found\u201D","Inicializa\xE7\xE3o","O firmware informa que n\xE3o encontrou um sistema para iniciar.",[["M\xEDdia remov\xEDvel escolhida por engano","Confira se h\xE1 pendrive ou disco externo conectado.","Remova a m\xEDdia de teste e tente iniciar novamente."],["Ordem de boot incorreta","Na BIOS/UEFI, veja se a unidade e o Windows Boot Manager aparecem.","Selecione a entrada de inicializa\xE7\xE3o correta, conforme a instala\xE7\xE3o existente."],["Unidade do sistema n\xE3o detectada","Confira a lista de armazenamento do firmware.","Se a unidade n\xE3o aparece, siga o caso 29 para testar conex\xE3o e unidade."],["Carregador de boot danificado ou modo incompat\xEDvel","Veja se o disco \xE9 detectado e se o modo UEFI/Legacy mudou; registre antes de alterar.","Restaure a configura\xE7\xE3o conhecida ou use Reparo de Inicializa\xE7\xE3o com o professor, preservando dados."]],"A entrada correta carrega o sistema ap\xF3s reiniciar.","N\xE3o formate por causa dessa mensagem; ela n\xE3o prova que os arquivos foram perdidos.");Pe("HD ou SSD n\xE3o aparece na BIOS/UEFI","Armazenamento","O firmware n\xE3o lista uma unidade que deveria estar instalada.",[["Unidade ausente ou slot incorreto","Com o professor, compare a instala\xE7\xE3o com o manual e o tipo da unidade.","Instale no conector compat\xEDvel; M.2 SATA e NVMe n\xE3o s\xE3o intercambi\xE1veis em todo slot."],["Conex\xE3o frouxa","PC fora da tomada: confira dados e energia em SATA; em M.2, confira encaixe e fixa\xE7\xE3o correta.","Reconecte com cuidado conforme o manual."],["Cabo, porta ou compartilhamento de pistas","Teste cabo/porta SATA conhecidos; confira se o uso de M.2 desabilita alguma porta SATA.","Substitua o cabo que falhou ou use porta/slot dispon\xEDvel e compat\xEDvel."],["Defeito na unidade ou no controlador","Teste a unidade em equipamento compat\xEDvel e outra unidade neste PC, sem formatar.","Se a falha acompanha a unidade, preserve/recupere dados e substitua; se acompanha a porta, encaminhe a placa-m\xE3e."]],"A unidade \xE9 identificada corretamente no firmware e seus dados podem ser verificados.");Pe("HD ou SSD novo aparece na BIOS, mas n\xE3o no sistema","Armazenamento","Uma unidade adicional \xE9 detectada pelo firmware, mas n\xE3o aparece no explorador.",[["Expectativa de aparecer antes de ser preparada","Confira se a unidade aparece no gerenciamento de discos e identifique pelo modelo/tamanho.","Se j\xE1 tem dados, n\xE3o inicialize. Se \xE9 nova e vazia, prossiga com o professor."],["Disco offline ou parti\xE7\xE3o sem letra","Confira estado do disco e das parti\xE7\xF5es existentes.","Coloque online se apropriado ou atribua letra livre \xE0 parti\xE7\xE3o saud\xE1vel."],["Unidade realmente nova, sem parti\xE7\xE3o","Confirme que n\xE3o cont\xE9m dados e que \xE9 a unidade correta.","Com supervis\xE3o, inicialize no esquema adequado e crie/formate um volume; essas a\xE7\xF5es apagam ou alteram estruturas de dados."],["Driver, sistema de arquivos ou compatibilidade","Se nem o gerenciador a detecta, confira controlador e driver; se tem parti\xE7\xE3o, confira compatibilidade.","Instale driver oficial ou use sistema compat\xEDvel para recuperar dados antes de qualquer convers\xE3o/formata\xE7\xE3o."]],"O volume esperado fica acess\xEDvel e um arquivo de teste pode ser salvo e lido.","Preparar uma unidade nova exige confirmar o disco certo. Nunca aplique o procedimento automaticamente numa unidade usada.");Pe("Portas USB frontais n\xE3o funcionam","Perif\xE9ricos","Um dispositivo funciona atr\xE1s, mas n\xE3o nas portas da frente do gabinete.",[["Problema no dispositivo ou cabo","Teste o acess\xF3rio em USB traseira e outro acess\xF3rio na frente.","Substitua o cabo/acess\xF3rio se a falha o acompanhar."],["Dispositivo exige mais energia","Compare um dispositivo simples e o acess\xF3rio de maior consumo.","Use porta adequada ou hub alimentado compat\xEDvel; n\xE3o sobrecarregue a porta."],["Cabo interno do painel solto","Com o professor e PC desligado da tomada, confira o header USB pelo manual.","Reconecte o cabo ao header correto, respeitando orienta\xE7\xE3o e pinos."],["Conector frontal danificado","Inspecione portas e cabo com a alimenta\xE7\xE3o desconectada.","N\xE3o use porta quebrada ou com pinos deformados; substitua o conjunto frontal se o defeito for confirmado."]],"Um dispositivo conhecido funciona nas portas frontais reparadas.");Pe("USB desconecta e reconecta sozinho","Perif\xE9ricos","O sistema toca repetidamente o som de desconex\xE3o de um dispositivo USB.",[["Cabo frouxo ou danificado","Observe se o problema acompanha um cabo espec\xEDfico e teste outro cabo adequado.","Substitua o cabo que falhou e elimine tens\xE3o sobre o conector."],["Hub ou extens\xE3o inadequados","Conecte o dispositivo diretamente a uma porta traseira.","Retire o intermedi\xE1rio defeituoso ou use hub alimentado apropriado."],["Energia ou driver do dispositivo","Compare com outra porta e revise driver e economia de energia, se a falha ocorre ap\xF3s inatividade.","Use alimenta\xE7\xE3o prevista pelo fabricante e atualize/ajuste o driver oficial."],["Defeito do acess\xF3rio ou controlador","Teste o acess\xF3rio noutro PC e v\xE1rios acess\xF3rios neste PC.","Troque o acess\xF3rio se a falha o acompanhar; se v\xE1rias portas falham, pe\xE7a diagn\xF3stico da placa-m\xE3e."]],"O dispositivo permanece conectado durante a tarefa que antes provocava a queda.");Pe("Gabinete faz muito barulho","Refrigera\xE7\xE3o","H\xE1 ru\xEDdo forte de ventoinha, vibra\xE7\xE3o ou raspagem.",[["Vibra\xE7\xE3o externa","Confira se o gabinete est\xE1 est\xE1vel e se algum objeto vibra encostado nele.","Estabilize o gabinete e retire objetos em contato."],["Cabo encostando numa ventoinha","Desligue, retire da tomada e, com o professor, inspecione sem p\xF4r a m\xE3o em ventoinha em movimento.","Prenda os cabos longe das h\xE9lices."],["Poeira ou fluxo de ar restrito","Confira filtros, entradas de ar e temperatura.","Limpe com m\xE9todo adequado ao manual e desobstrua a ventila\xE7\xE3o."],["Ventoinha desgastada ou unidade mec\xE2nica falhando","Identifique de onde vem o som; cliques de HDD com erros exigem preserva\xE7\xE3o de dados.","Substitua a ventoinha confirmada como defeituosa. Se \xE9 HDD, siga o caso 46. Se \xE9 a fonte, encaminhe sem abri-la."]],"O ru\xEDdo anormal desaparece e temperaturas continuam adequadas.");Pe("Computador fica muito quente","Refrigera\xE7\xE3o","H\xE1 temperaturas elevadas ou queda de desempenho durante o uso.",[["Ambiente ou sa\xEDdas de ar obstru\xEDdas","Observe posi\xE7\xE3o, entradas/sa\xEDdas e condi\xE7\xF5es do ambiente.","Afaste de obstru\xE7\xF5es e melhore a circula\xE7\xE3o de ar."],["Carga de trabalho excessiva","Compare temperatura em repouso e em uso com ferramenta confi\xE1vel e limites do fabricante.","Reduza tarefas desnecess\xE1rias e investigue a tarefa respons\xE1vel."],["Poeira ou ventoinha com problema","Com PC desconectado e professor, inspecione filtros, dissipadores e conex\xF5es.","Limpe corretamente e substitua/reconecte ventoinha cujo defeito foi confirmado."],["Cooler mal instalado ou interface t\xE9rmica inadequada","Verifique fixa\xE7\xE3o e montagem conforme o manual, sem desmontar em m\xE1quina quente.","O professor reinstala o cooler e aplica interface t\xE9rmica conforme o fabricante."]],"As temperaturas ficam dentro dos limites do componente na tarefa de refer\xEAncia.","N\xE3o use um limite \xFAnico para toda CPU/GPU. N\xE3o abra a fonte nem use l\xEDquidos ou aspirador dom\xE9stico nas placas.");Pe("Computador desliga sozinho durante o uso","Energia","O PC apaga sem encerramento normal do sistema.",[["Alimenta\xE7\xE3o externa intermitente","Observe tomada, cabo e filtro; compare com ponto de energia confi\xE1vel.","Corrija a conex\xE3o ou use alimenta\xE7\xE3o est\xE1vel. Defeito el\xE9trico deve ser tratado pelo respons\xE1vel."],["Aquecimento excessivo","Observe temperaturas antes da falha, sem for\xE7ar desligamentos repetidos.","Siga o caso 34 para corrigir refrigera\xE7\xE3o."],["Configura\xE7\xE3o ou comando de desligamento","Confira eventos, op\xE7\xF5es de energia e rela\xE7\xE3o com um programa espec\xEDfico.","Corrija a configura\xE7\xE3o ou aplicativo identificado."],["Fonte ou hardware com falha","Com o professor, compare com fonte compat\xEDvel conhecida; investigue componentes se persistir.","Substitua s\xF3 a pe\xE7a isolada no teste. Um evento de desligamento inesperado sozinho n\xE3o identifica a fonte."]],"O PC permanece ligado na tarefa que antes causava a falha, com temperatura e alimenta\xE7\xE3o adequadas.");Pe("Computador inteiro congela","Sistema","Mouse, teclado e programas deixam de responder; pode ser necess\xE1rio reiniciar.",[["Sobrecarga tempor\xE1ria","Aguarde um pouco e veja se o sistema ainda responde a atalhos; registre a tarefa.","Feche a tarefa problem\xE1tica se conseguir e reduza a carga."],["Aplicativo ou driver recente","Confira se come\xE7ou ap\xF3s instala\xE7\xE3o/atualiza\xE7\xE3o e consulte os registros.","Atualize ou reverta a mudan\xE7a identificada, ap\xF3s salvar dados."],["Aquecimento ou armazenamento com falha","Verifique temperaturas e sa\xFAde da unidade; preserve arquivos antes de testes extensos.","Corrija refrigera\xE7\xE3o ou siga o caso 46 se houver sinais de falha no disco."],["Mem\xF3ria ou outro hardware inst\xE1vel","Com o professor, teste mem\xF3ria e par\xE2metros padr\xE3o; consulte o caso 43.","Isole o m\xF3dulo/componente defeituoso e substitua apenas ap\xF3s confirmar."]],"O sistema continua respondendo em repeti\xE7\xE3o da atividade e em uso normal.","Reinicializa\xE7\xE3o for\xE7ada pode perder trabalho n\xE3o salvo; use apenas se o sistema realmente n\xE3o responder.");Pe("Tela preta depois que o Windows come\xE7a a carregar","V\xEDdeo","A imagem de firmware aparece, mas some ao entrar no sistema.",[["Sa\xEDda ou modo de exibi\xE7\xE3o incorreto","Confira o monitor escolhido, entrada e conex\xE3o; teste uma \xFAnica tela.","Use a sa\xEDda correta e um modo de exibi\xE7\xE3o suportado."],["Driver de v\xEDdeo com falha","Com o professor, acesse o modo de seguran\xE7a pelas op\xE7\xF5es oficiais de recupera\xE7\xE3o.","Se h\xE1 imagem nesse modo, reverta/reinstale o driver oficial relacionado \xE0 falha."],["Aplicativo ou sess\xE3o do sistema com erro","Veja se aparece ponteiro ou se outro usu\xE1rio consegue iniciar sess\xE3o.","Desative a inicializa\xE7\xE3o do aplicativo identificado ou repare a sess\xE3o com backup das informa\xE7\xF5es."],["Corrup\xE7\xE3o do sistema ou GPU inst\xE1vel","Compare outra sa\xEDda/GPU compat\xEDvel e op\xE7\xF5es de recupera\xE7\xE3o do sistema.","Repare o sistema ap\xF3s backup se hardware estiver saud\xE1vel; encaminhe a GPU se a falha a acompanhar."]],"A imagem permanece vis\xEDvel durante a entrada no Windows e o uso de aplicativos.");Pe("Mem\xF3ria instalada n\xE3o aparece por completo","Mem\xF3ria","O total informado difere dos m\xF3dulos instalados ou a mem\xF3ria utiliz\xE1vel \xE9 menor.",[["Confus\xE3o entre mem\xF3ria instalada e utiliz\xE1vel","Compare BIOS/UEFI, sistema e mem\xF3ria reservada ao hardware.","Explique a reserva para v\xEDdeo integrado e diferen\xE7as de unidades; n\xE3o troque RAM por uma reserva normal."],["Limite do sistema ou da placa","Confira arquitetura do sistema, capacidade suportada e manual da placa-m\xE3e.","Use sistema de 64 bits e m\xF3dulos dentro dos limites, quando necess\xE1rio e compat\xEDvel."],["M\xF3dulo mal encaixado ou slot errado","Com PC desconectado e professor, confira travas e slots recomendados.","Reinstale os m\xF3dulos nos slots previstos pelo fabricante."],["M\xF3dulo, slot ou canal com defeito","Teste um m\xF3dulo por vez e compare slots permitidos, registrando resultados.","Substitua o m\xF3dulo se a falha o acompanhar; se um canal/slot falha, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"Firmware reconhece a capacidade esperada e o sistema informa uma reserva explic\xE1vel.");Pe("Computador deixa de iniciar ap\xF3s instalar RAM","Mem\xF3ria","A falha surge logo depois da troca ou amplia\xE7\xE3o da mem\xF3ria.",[["Treinamento inicial de mem\xF3ria","Consulte o manual sobre o primeiro boot; alguns sistemas levam mais tempo ap\xF3s mudan\xE7as.","Aguarde o per\xEDodo indicado, sem reiniciar continuamente."],["M\xF3dulo mal encaixado ou posi\xE7\xE3o incorreta","Com professor e alimenta\xE7\xE3o desconectada, confira travas e slots indicados.","Reencaixe corretamente; n\xE3o force um m\xF3dulo de padr\xE3o diferente."],["M\xF3dulo incompat\xEDvel ou mistura inst\xE1vel","Confira gera\xE7\xE3o DDR, capacidade, tipo e especifica\xE7\xF5es; teste a configura\xE7\xE3o anterior.","Use m\xF3dulos compat\xEDveis e preferencialmente um conjunto validado para a placa."],["Perfil de mem\xF3ria ou m\xF3dulo defeituoso","Com o professor, teste um m\xF3dulo por vez em par\xE2metros padr\xE3o; reset de CMOS somente conforme o manual.","Desative perfil inst\xE1vel ou substitua o m\xF3dulo que falha tamb\xE9m em condi\xE7\xF5es padr\xE3o."]],"O PC conclui o POST, reconhece a RAM e passa por teste orientado de mem\xF3ria.");Pe("Mensagem \u201CCPU Fan Error\u201D ou erro de ventoinha","Refrigera\xE7\xE3o","O firmware informa que n\xE3o detectou corretamente a ventoinha do processador.",[["Aviso ap\xF3s uma manuten\xE7\xE3o","N\xE3o ignore; desligue e confira o que foi alterado.","Interrompa o uso at\xE9 confirmar a refrigera\xE7\xE3o do processador."],["Cooler conectado ao header errado","Com PC fora da tomada, o professor identifica CPU_FAN e demais headers pelo manual.","Conecte o cooler ao header previsto; bombas de water cooler seguem o manual espec\xEDfico."],["Cabo solto, h\xE9lice bloqueada ou ventoinha defeituosa","Inspecione conex\xF5es e obst\xE1culos sem energizar partes expostas.","Reconecte, retire a obstru\xE7\xE3o ou substitua a ventoinha que falhou."],["Limite de leitura incompat\xEDvel com a montagem","Se refrigera\xE7\xE3o est\xE1 comprovadamente funcional, compare rota\xE7\xE3o m\xEDnima e leitura com o manual.","O professor ajusta o monitoramento ao conjunto correto. N\xE3o desative o alerta para esconder um cooler parado."]],"A leitura de refrigera\xE7\xE3o \xE9 coerente, o alerta \xE9 resolvido e a temperatura permanece adequada.");Pe("PC n\xE3o conclui o POST: bipes ou LED de diagn\xF3stico","Inicializa\xE7\xE3o","O computador tem energia, mas n\xE3o chega \xE0 imagem inicial ou sinaliza um erro.",[["C\xF3digo ainda n\xE3o identificado","Anote padr\xE3o, dura\xE7\xE3o, cor e modelo exato da placa/PC.","Consulte a tabela espec\xEDfica do fabricante; n\xE3o use tabelas universais de bipes."],["Perif\xE9rico ou mudan\xE7a recente interferindo","Compare sem acess\xF3rios externos n\xE3o essenciais e registre a \xFAltima mudan\xE7a.","Remova o acess\xF3rio problem\xE1tico ou restaure a configura\xE7\xE3o anterior."],["Mem\xF3ria ou v\xEDdeo indicados pelo c\xF3digo","Com professor e PC desconectado, confira encaixes e teste componente compat\xEDvel conhecido.","Corrija a conex\xE3o ou substitua somente o m\xF3dulo/placa que falhou no teste."],["CPU, placa-m\xE3e ou firmware indicados pelo diagn\xF3stico","Revise compatibilidade e siga os testes do manual; configura\xE7\xE3o m\xEDnima exige supervis\xE3o.","Encaminhe para diagn\xF3stico t\xE9cnico. Atualiza\xE7\xE3o de BIOS n\xE3o deve ser feita por tentativa num PC inst\xE1vel."]],"O POST \xE9 conclu\xEDdo e o c\xF3digo de erro deixa de aparecer.","POST \xE9 o autoteste de hardware executado antes de carregar o sistema operacional.");Pe("Liga por poucos segundos e desliga","Energia","As ventoinhas come\xE7am a girar, mas o PC apaga antes de iniciar.",[["Perif\xE9rico externo causando prote\xE7\xE3o","Desconecte acess\xF3rios externos n\xE3o essenciais com o PC desligado.","Retire o perif\xE9rico/cabo que faz a falha retornar."],["Conector de energia interno incompleto","Professor, PC fora da tomada: confira ATX da placa e alimenta\xE7\xE3o da CPU pelo manual.","Conecte os cabos corretos da fonte; n\xE3o confunda EPS/CPU com PCIe/GPU."],["Cooler ausente, solto ou erro de montagem","Confira a presen\xE7a, fixa\xE7\xE3o e conex\xE3o da refrigera\xE7\xE3o.","Reinstale corretamente antes de voltar a ligar. Nunca teste CPU sem cooler."],["Curto, fonte ou placa-m\xE3e defeituosos","Professor inspeciona parafusos soltos, espa\xE7adores e testa fonte compat\xEDvel com seus pr\xF3prios cabos.","Corrija a montagem se confirmado; substitua fonte/placa s\xF3 ap\xF3s isolamento t\xE9cnico."]],"O PC permanece ligado e conclui o POST sem aquecimento anormal.","Se houver cheiro de queimado, fa\xEDsca ou l\xEDquido, desconecte e encaminhe: n\xE3o repita testes de energiza\xE7\xE3o.");Pe("Erros no teste de mem\xF3ria RAM","Mem\xF3ria","Uma ferramenta de diagn\xF3stico acusa erros, ou falhas gerais apontam para a mem\xF3ria.",[["Perfil de frequ\xEAncia inst\xE1vel","Registre os ajustes e confira se XMP/EXPO ou overclock est\xE1 ativo.","Com o professor, teste nos par\xE2metros padr\xE3o suportados."],["Mau encaixe","PC fora da tomada: confira travas e slots recomendados.","Reencaixe segurando pelas bordas, com prote\xE7\xE3o contra descarga eletrost\xE1tica."],["M\xF3dulo com falha","Teste um m\xF3dulo por vez no slot recomendado e repita com m\xF3dulo conhecido.","Substitua o m\xF3dulo se o erro o acompanhar em configura\xE7\xF5es padr\xE3o."],["Slot, controlador ou combina\xE7\xE3o de m\xF3dulos","Compare m\xF3dulos bons em slots permitidos e consulte compatibilidade.","Use conjunto compat\xEDvel; se o erro acompanha slot/canal, encaminhe placa-m\xE3e/CPU para diagn\xF3stico."]],"A configura\xE7\xE3o final passa pelo teste completo escolhido e n\xE3o reproduz as falhas observadas.","Um teste sem erros reduz suspeitas, mas n\xE3o garante aus\xEAncia de toda falha intermitente. N\xE3o esfregue borracha nem aplique produtos caseiros nos contatos.");Pe("Quadrados, linhas ou cores estranhas na imagem","V\xEDdeo","Aparecem artefatos gr\xE1ficos, distor\xE7\xF5es ou blocos de cor.",[["Cabo ou monitor","Compare outro cabo e outro monitor; observe se o defeito aparece no menu do monitor.","Substitua o cabo/monitor cuja falha foi isolada."],["Aplicativo ou driver","Veja se ocorre s\xF3 num programa e se come\xE7ou ap\xF3s atualiza\xE7\xE3o.","Atualize/corrija o aplicativo ou reinstale/reverta o driver oficial."],["Temperatura ou overclock","Confira temperatura e par\xE2metros da GPU e mem\xF3ria, sem for\xE7ar testes se estiver superaquecendo.","Restaure par\xE2metros padr\xE3o e corrija a refrigera\xE7\xE3o."],["Falha de GPU ou mem\xF3ria compartilhada","Compare imagem antes do sistema e teste GPU/RAM compat\xEDvel conhecida com o professor.","Se acompanha a GPU, encaminhe/substitua a placa; com v\xEDdeo integrado, investigue tamb\xE9m RAM e placa-m\xE3e."]],"A imagem permanece limpa no firmware e na tarefa que antes apresentava artefatos.");Pe("Jogos ou programas 3D travam, mas o desktop funciona","V\xEDdeo","A falha aparece com carga gr\xE1fica mais alta.",[["Requisito ou configura\xE7\xE3o acima do hardware","Compare requisitos, resolu\xE7\xE3o e ajustes do programa.","Use configura\xE7\xF5es compat\xEDveis e teste uma carga menor."],["Programa ou driver com falha","Confira se outros programas 3D tamb\xE9m falham e registre o erro.","Atualize/repare o programa e use driver oficial compat\xEDvel."],["Aquecimento ou ajustes inst\xE1veis","Observe temperaturas e desative overclock/perfis inst\xE1veis com o professor.","Corrija a refrigera\xE7\xE3o e teste nos par\xE2metros padr\xE3o."],["GPU ou alimenta\xE7\xE3o inadequada","Com PC desconectado, professor confere conectores e requisitos da GPU/fonte; compara componentes conhecidos.","Use alimenta\xE7\xE3o prevista e substitua o componente cuja falha foi confirmada. N\xE3o continue for\xE7ando desligamentos."]],"A tarefa gr\xE1fica de refer\xEAncia funciona com ajustes suportados, sem travamento nem desligamento.");Pe("HD faz cliques ou unidade apresenta erros de leitura","Armazenamento","Arquivos falham ao abrir, a unidade desaparece ou um HDD produz cliques repetidos.",[["Ind\xEDcio de risco aos dados","Confira mensagens e ru\xEDdo; n\xE3o confunda acesso normal de HDD com cliques repetitivos de falha.","Pare usos n\xE3o essenciais. Se os dados s\xE3o insubstitu\xEDveis ou h\xE1 ru\xEDdo anormal, desligue e busque recupera\xE7\xE3o especializada."],["Conex\xE3o com mau contato","Se n\xE3o h\xE1 dano mec\xE2nico aparente e o professor autoriza teste, confira cabos com PC desconectado.","Corrija cabo/porta confirmado como defeituoso, sem escrever na unidade."],["Alerta de sa\xFAde da unidade","Consulte indicadores SMART e diagn\xF3stico oficial, priorizando backup e evitando teste extenso em disco degradado.","Copie dados acess\xEDveis para outra unidade saud\xE1vel; alertas de falha justificam substitui\xE7\xE3o."],["Falha persistente da unidade","Se erros acompanham a unidade em conex\xE3o confi\xE1vel, trate como falha de armazenamento.","Substitua e restaure backup. Para dados n\xE3o recuperados, encaminhe a especialista."]],"Os dados preservados s\xE3o verificados e a unidade saud\xE1vel opera sem os erros anteriores.","N\xE3o abra HDD, n\xE3o use congelador e n\xE3o execute reparos que escrevem na unidade antes de avaliar a preserva\xE7\xE3o dos dados. SSD n\xE3o tem pe\xE7as m\xF3veis; ru\xEDdo mec\xE2nico n\xE3o vem dele.");Pe("Tela de erro de parada: BSOD","Sistema","O Windows mostra um erro grave e reinicia; a cor da tela pode variar pela vers\xE3o.",[["C\xF3digo e contexto desconhecidos","Registre c\xF3digo de parada, hor\xE1rio, tarefa e mudan\xE7a recente; um c\xF3digo sozinho n\xE3o identifica uma pe\xE7a.","Guarde as informa\xE7\xF5es para comparar ocorr\xEAncias antes de alterar o PC."],["Driver, atualiza\xE7\xE3o ou acess\xF3rio recente","Compare sem o acess\xF3rio rec\xE9m-instalado e consulte hist\xF3rico de erros.","Reverta ou atualize o item relacionado \xE0 falha com fonte oficial."],["Arquivos do sistema, temperatura ou disco","Fa\xE7a backup, verifique registros, refrigera\xE7\xE3o e sa\xFAde da unidade.","Aplique reparo oficial se apropriado; corrija calor ou armazenamento confirmado como falho."],["RAM ou outro hardware inst\xE1vel","Com o professor, teste em par\xE2metros padr\xE3o, mem\xF3ria e componentes apontados pelos registros.","Substitua apenas o item cuja falha foi isolada; se necess\xE1rio, encaminhe an\xE1lise dos registros de falha."]],"A atividade que provocava a falha e o uso normal ficam est\xE1veis; registre se houve nova ocorr\xEAncia.");Pe("PC reinicia ou perde estabilidade ap\xF3s ativar XMP/EXPO","Mem\xF3ria","O defeito come\xE7a depois de alterar frequ\xEAncia ou temporiza\xE7\xF5es da mem\xF3ria.",[["Rela\xE7\xE3o com o ajuste n\xE3o confirmada","Registre o perfil ativado e compare com a configura\xE7\xE3o anterior.","Com o professor, desative o perfil e teste nos par\xE2metros padr\xE3o."],["Limite de compatibilidade do conjunto","Confira manual, lista de mem\xF3ria validada e capacidade/frequ\xEAncia suportadas pela CPU.","Use um perfil/configura\xE7\xE3o suportada e est\xE1vel; o perfil anunciado n\xE3o \xE9 garantia para todo conjunto."],["Mistura de m\xF3dulos ou slots inadequados","Confira se os m\xF3dulos s\xE3o de um conjunto validado e ocupam os slots recomendados.","Teste o conjunto apropriado nos slots corretos."],["Falha persistente em par\xE2metros padr\xE3o","Execute teste orientado de mem\xF3ria se o erro continua sem perfil.","Siga o caso 43; encaminhe firmware/controlador se m\xF3dulos bons tamb\xE9m falham."]],"O PC fica est\xE1vel e passa no teste de mem\xF3ria com a configura\xE7\xE3o final documentada.","Reset de CMOS s\xF3 conforme o manual, registrando ajustes e tendo a chave de recupera\xE7\xE3o do disco se necess\xE1ria.");Pe("Computador n\xE3o inicia depois de uma troca de pe\xE7as","Inicializa\xE7\xE3o","A falha aparece logo ap\xF3s trocar CPU, GPU, fonte ou outro componente.",[["Conex\xE3o esquecida durante a montagem","PC fora da tomada: professor compara cabos, v\xEDdeo e montagem com os manuais.","Corrija o encaixe/conector ausente sem for\xE7ar nem adaptar cabos indevidos."],["Pe\xE7a nova incompat\xEDvel","Confira modelo exato, socket, mem\xF3ria, pot\xEAncia e conectores necess\xE1rios.","Instale componente compat\xEDvel. Em fontes modulares, use apenas cabos aprovados para o modelo espec\xEDfico."],["CPU depende de vers\xE3o de BIOS espec\xEDfica","Consulte a lista oficial de CPUs e a vers\xE3o m\xEDnima de firmware.","Professor planeja atualiza\xE7\xE3o apenas pelo m\xE9todo oficial, com energia est\xE1vel e hardware/m\xE9todo compat\xEDvel."],["Pe\xE7a nova defeituosa ou dano de montagem","Compare com a configura\xE7\xE3o anterior, se segura; examine socket e fixa\xE7\xF5es sem tocar em pinos.","Se a falha acompanha a pe\xE7a nova, substitua; se h\xE1 dano f\xEDsico, encaminhe para reparo especializado."]],"O novo conjunto conclui o POST, reconhece as pe\xE7as e fica est\xE1vel no uso previsto.","Atualizar BIOS por tentativa pode inutilizar a placa. N\xE3o misture cabos modulares de fontes diferentes.");Pe("Suspeita de defeito na placa-m\xE3e","Inicializa\xE7\xE3o","Falhas persistem mesmo ap\xF3s verificar alimenta\xE7\xE3o, conex\xF5es e componentes b\xE1sicos.",[["Conclus\xE3o prematura","Revise o hist\xF3rico e confirme tomada, fonte, monitor, cabos e c\xF3digo de POST.","Resolva causas externas e documente tudo antes de condenar a placa."],["Configura\xE7\xE3o ou montagem inadequada","Professor confere conectores, espa\xE7adores, compatibilidade e par\xE2metros registrados.","Corrija montagem; restaure ajustes conforme o manual se houver evid\xEAncia de configura\xE7\xE3o incorreta."],["Outra pe\xE7a provoca o sintoma","Com professor, fa\xE7a teste m\xEDnimo previsto no manual usando fonte, RAM e v\xEDdeo compat\xEDveis conhecidos.","Troque uma vari\xE1vel por vez e substitua a pe\xE7a que comprovadamente causa o erro."],["Falha da placa-m\xE3e ou CPU ainda n\xE3o isolada","Se a falha persiste com pe\xE7as boas e montagem correta, s\xE3o necess\xE1rios testes t\xE9cnicos adicionais.","Encaminhe para bancada especializada; substitua a placa somente com evid\xEAncia suficiente. Reparos eletr\xF4nicos ficam fora desta pr\xE1tica."]],"H\xE1 um diagn\xF3stico documentado com testes comparativos ou encaminhamento justificado, seguido de valida\xE7\xE3o do reparo.","Inspe\xE7\xE3o visual sem danos n\xE3o prova que a placa est\xE1 boa. Fonte conhecida e compat\xEDvel \xE9 diferente de fonte apenas \u201Cnova\u201D.");var au=[{id:1,name:"Primeiros passos",short:"B\xE1sico",desc:"Energia, cabos e conex\xF5es externas."},{id:2,name:"Uso e configura\xE7\xF5es",short:"B\xE1sico +",desc:"Perif\xE9ricos, ajustes e desempenho."},{id:3,name:"Sistema e armazenamento",short:"Intermedi\xE1rio",desc:"Boot, rede, arquivos e recupera\xE7\xE3o."},{id:4,name:"Dentro do gabinete",short:"Intermedi\xE1rio +",desc:"Refrigera\xE7\xE3o, mem\xF3ria e conex\xF5es internas."},{id:5,name:"Isolamento de falhas",short:"Avan\xE7ado guiado",desc:"POST, testes comparativos e diagn\xF3stico t\xE9cnico."}];var ec="amc-mundo-3d-v1",tc="Preservar os dados, consultar o manual e fazer interven\xE7\xF5es internas com o professor, computador desligado e fora da tomada. Nunca abrir fonte ou monitor.",Qi=["Preparar","Investigar","Diagnosticar","Corrigir","Validar","Comunicar"],$n=[{name:"Campus",color:"#647e4c",xp:0},{name:"Circuito",color:"#4e8b9f",xp:200},{name:"Criativo",color:"#ac7a50",xp:500},{name:"Especialista",color:"#8a72aa",xp:1e3}],gi=i=>(i.id-1)%i.steps.length,nc=()=>({version:1,tutorial:!1,skin:0,quality:"auto",records:{}}),ou=()=>({stage:0,tested:[],errors:0,hints:0}),mn=i=>Object.values(i.records).filter(e=>e.stage===6).length*100;function ic(i){if(!i||typeof i!="object"||i.version!==1||!i.records||typeof i.records!="object"||Array.isArray(i.records))throw Error("Arquivo de progresso inv\xE1lido.");let e=nc();e.tutorial=i.tutorial===!0,e.quality=["auto","low"].includes(i.quality)?i.quality:"auto";for(let t of ut){let n=i.records[t.id];if(!n||!Number.isInteger(n.stage)||n.stage<0||n.stage>6||!Array.isArray(n.tested))continue;let s=[...new Set(n.tested.filter(a=>Number.isInteger(a)&&a>=0&&a<t.steps.length))],r=n.stage>1&&!s.includes(gi(t))?1:n.stage;e.records[t.id]={stage:r,tested:s,errors:Number.isInteger(n.errors)&&n.errors>=0?Math.min(n.errors,1e5):0,hints:Number.isInteger(n.hints)&&n.hints>=0?Math.min(n.hints,1e5):0}}return e.skin=Number.isInteger(i.skin)&&$n[i.skin]?.xp<=mn(e)?i.skin:0,e}function sc(i,e){return e===0?[tc,"Abrir a fonte para procurar a falha.","Substituir v\xE1rias pe\xE7as sem fazer testes."]:e===2?i.steps.map(t=>t[0]):e===3?i.steps.map(t=>t[2]):e===4?[i.confirm,"Encerrar sem repetir a tarefa que apresentava o defeito.","Considerar resolvido s\xF3 porque uma pe\xE7a foi trocada."]:e===5?["Registrar sintoma, evid\xEAncia, causa, a\xE7\xE3o e valida\xE7\xE3o; comunicar os limites e a supervis\xE3o necess\xE1ria.","Informar apenas \u201Cresolvido\u201D, sem registrar os testes.","Afirmar que todo computador com esse sintoma tem a mesma causa."]:[]}function cu(i,e,t){let n=sc(i,e.stage);if(!n.length||!Number.isInteger(t)||t<0||t>=n.length)return!1;let s=[2,3].includes(e.stage)?gi(i):0;return t!==s?(e.errors++,!1):(e.stage++,!0)}function lu(i,e,t){return e.stage!==1||!Number.isInteger(t)||t<0||t>=i.steps.length?null:(e.tested.includes(t)||e.tested.push(t),t===gi(i)?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${i.steps[t][0]}. A falha permanece at\xE9 a corre\xE7\xE3o correspondente.`:"Resultado esperado nesta verifica\xE7\xE3o: essa hip\xF3tese foi descartada no cen\xE1rio. A falha continua. Compare outra vari\xE1vel, uma de cada vez.")}function uu(i,e){return e.stage===1&&e.tested.includes(gi(i))?(e.stage=2,!0):!1}var ve=i=>document.querySelector(i),St=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),xt=i=>String(i).padStart(2,"0"),hu={monitor:"M3 4h18v13H3z M8 21h8 M12 17v4",globe:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M3 12h18 M12 3c5 5 5 13 0 18 M12 3c-5 5-5 13 0 18",flag:"M5 21V3 M5 4c5-4 9 4 14 0v10c-5 4-9-4-14 0",book:"M3 4c3-1 6 0 9 2 3-2 6-3 9-2v15c-3-1-6 0-9 2-3-2-6-3-9-2z M12 6v15",user:"M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M4 21v-2a8 8 0 0 1 16 0v2",spark:"m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7z",library:"M4 4h4v16H4z M11 4h3v16h-3z m6 1 3-1 3 15-3 1z",pin:"M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0 M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",map:"m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z M9 3v16 M15 5v16",home:"m3 10 9-7 9 7 M5 9v12h5v-7h4v7h5V9",close:"m6 6 12 12 M6 18 18 6",help:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M9.5 9a2.5 2.5 0 1 1 4 2c-1 .5-1.5 1-1.5 2 M12 17h.01",settings:"m9 3-.5 3-2 1-2.5-1-2 3 2 2v2l-2 2 2 3 2.5-1 2 1 .5 3h6l.5-3 2-1 2.5 1 2-3-2-2v-2l2-2-2-3-2.5 1-2-1L15 3z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",bolt:"m13 2-9 12h7l-1 8 10-13h-7z",cpu:"M6 6h12v12H6z M9 9h6v6H9z M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3",layers:"m3 7 9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4",tool:"m14 6-3 3 4 4 3-3c4 7-3 10-7 6l-6 6-3-3 6-6C4 5 9 0 14 6",hand:"M8 12V5a2 2 0 0 1 4 0v7 M12 9a2 2 0 0 1 4 0v3 M16 10a2 2 0 0 1 4 0v5c0 4-3 6-6 6h-2c-3 0-4-2-5-4l-3-5c-1-2 1-3 3-1l3 3",check:"m5 12 4 4L20 5"},vi=i=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${hu[i]||hu.monitor}"/></svg>`;function fu(){document.querySelectorAll("[data-icon]").forEach(i=>i.innerHTML=vi(i.dataset.icon))}var Wt=au.map((i,e)=>({...i,short:["Conex\xF5es essenciais","Ajustes & desempenho","Sistema & dados","Dentro do gabinete","Detetives de hardware"][e],icon:["bolt","settings","layers","cpu","tool"][e],color:["#8baf58","#c99a59","#739eaa","#9c87b1","#cf8e79"][e],soft:["#eaf0db","#f4e9d7","#e3edf0","#ece7f2","#f7e7df"][e],x:[-9,0,9,-6,6][e],z:[-5,-9,-5,6,6][e]})),Fe=nc(),ns=!0;try{let i=localStorage.getItem(ec);i&&(Fe=ic(JSON.parse(i)))}catch{ns=!1}var _i=null,jt=0,In="",Hs=!1,Ym="",pu=null,du,qt=null,Gt=null,Nt=null,La=null,es=i=>Fe.records[i.id]||=ou(),Ws=()=>ut.filter(i=>Fe.records[i.id]?.stage===6);function ln(i){ve("#toast").textContent=i,ve("#toast").hidden=!1,clearTimeout(du),du=setTimeout(()=>ve("#toast").hidden=!0,5e3)}function gn(){try{localStorage.setItem(ec,JSON.stringify(Fe)),ns=!0}catch{ns=!1}mu()}function mu(){let i=mn(Fe),e=i>=1e3?3:i>=500?2:i>=200?1:0;ve("#xp").textContent=`${i} XP`,ve("#rank").textContent=["T\xE9cnico iniciante","Explorador t\xE9cnico","Solucionador","Especialista do campus"][e],ve("#rank-number").textContent=xt(e+1);let t=[0,200,500,1e3][e],n=[200,500,1e3,5e3][e];ve("#next-xp").textContent=i>=5e3?"campus restaurado":`pr\xF3ximo marco: ${n} XP`,ve("#xp-bar").style.width=`${Math.min(100,(i-t)/(n-t)*100)}%`;let s=ut.find(r=>Fe.records[r.id]&&Fe.records[r.id].stage<6)||ut.find(r=>Fe.records[r.id]?.stage!==6);ve("#quest-title").textContent=s?i?"A pr\xF3xima descoberta":"Seu primeiro diagn\xF3stico":"Campus restaurado!",ve("#quest-desc").textContent=s?`OS ${xt(s.id)} \xB7 ${s.title}`:"Voc\xEA concluiu os 50 chamados. Explore seu percurso.",ve("#save-state").innerHTML=`<span class="live-dot"></span>${ns?" Progresso salvo neste dispositivo":" Sem salvamento: exporte seu percurso"}`,ve("#save-state").classList.toggle("storage-warning",!ns),ve("#station-strip").innerHTML=Wt.map(r=>{let a=Ws().filter(o=>o.level===r.id).length;return`<button class="station-card" data-travel="${r.id}" style="--accent:${r.color};--soft:${r.soft}"><div class="station-card-top"><span>${vi(r.icon)}</span><span>ESTA\xC7\xC3O ${xt(r.id)} \u2197</span></div><h4>${r.short}</h4><p>${a} de 10 miss\xF5es resolvidas</p><div class="station-mini-track"><i style="width:${a*10}%"></i></div></button>`}).join(""),qt&&qt.refresh()}function vn(i,e,t,n){ve("#panel").open||(pu=document.activeElement),Ym=n,ve("#panel-title").textContent=i,ve("#panel-kicker").textContent=e,ve("#panel-content").innerHTML=t,fu(),ve("#panel").open||ve("#panel").showModal()}function xi(){ve("#panel").open&&ve("#panel").close()}ve("#panel").addEventListener("close",()=>{_i=null,In="",Hs=!1,pu?.focus({preventScroll:!0})});ve("#close-panel").onclick=xi;ve("#panel").addEventListener("click",i=>{if(i.target===ve("#panel")){let e=ve("#panel").getBoundingClientRect();(i.clientX<e.left||i.clientX>e.right||i.clientY<e.top||i.clientY>e.bottom)&&xi()}});function ac(){vn("Sua pr\xF3xima habilidade come\xE7a aqui.","BOAS-VINDAS AO CAMPUS AMC",`<div class="intro-art" aria-hidden="true"><span>\u{1F333}</span><span>\u{1F9D1}\u{1F3FD}\u200D\u{1F527}</span><span>\u{1F5A5}\uFE0F</span></div><p class="dialog-copy">Voc\xEA \xE9 a nova pessoa da equipe t\xE9cnica! O laborat\xF3rio precisa de ajuda. Explore <strong>5 esta\xE7\xF5es e 50 chamados reais de aprendizagem</strong>, investigue as pistas e traga os computadores de volta \xE0 vida.</p><div class="instruction-grid"><div class="instruction"><strong>01 \xB7 Explore</strong><p>Use WASD ou setas para andar na dire\xE7\xE3o da c\xE2mera. Arraste o cen\xE1rio para olhar ao redor; use a roda do mouse ou uma pin\xE7a com dois dedos para zoom. No celular, use o controle para andar.</p></div><div class="instruction"><strong>02 \xB7 Investigue</strong><p>Aproxime-se da bancada e pressione E ou toque na m\xE3o. Teste uma hip\xF3tese por vez.</p></div><div class="instruction"><strong>03 \xB7 Conquiste</strong><p>Ganhe 100 XP por miss\xE3o resolvida e desbloqueie cores para o avatar. Errar faz parte!</p></div></div><p class="note">O progresso fica neste navegador. Voc\xEA pode export\xE1-lo em Meu percurso para continuar em outro dispositivo. Esta experi\xEAncia \xE9 individual, sem cron\xF4metro.</p><div class="actions"><button class="primary" data-start>Entrar no campus ${vi("globe")}</button><button class="secondary" data-list="0">Conhecer as miss\xF5es</button></div>`,"help")}function is(i=jt){jt=Number(i);let e=ut.filter(t=>!jt||t.level===jt);vn(jt?Wt[jt-1].name:"Cada problema, uma descoberta.",`${jt?"ESTA\xC7\xC3O "+xt(jt):"CENTRAL DE MISS\xD5ES"} \xB7 ${e.length} CHAMADOS`,`${jt?`<p class="dialog-copy">${St(Wt[jt-1].desc)} Selecione um chamado para assumir a bancada.</p>`:""}<div class="station-filters">${[0,1,2,3,4,5].map(t=>`<button data-list="${t}" class="${t===jt?"selected":""}" aria-pressed="${t===jt}">${t?"Esta\xE7\xE3o "+xt(t):"Todas"}</button>`).join("")}</div><div class="mission-list">${e.map(t=>{let n=Fe.records[t.id];return`<button class="mission-row" data-case="${t.id}"><span class="mission-num">${xt(t.id)}</span><div><strong>${St(t.title)}</strong><small>${St(t.category)} \xB7 Esta\xE7\xE3o ${xt(t.level)} \xB7 ${n?.stage===6?"100 XP conquistados":n?Qi[n.stage]:"100 XP dispon\xEDveis"}</small></div><span class="status">${n?.stage===6?"\u2713":n?"Retomar \u2197":"Jogar \u2197"}</span></button>`}).join("")}</div>`,"missions")}function oc(){vn("Para onde vamos?","MAPA DO CAMPUS",`<p class="dialog-copy">Escolha uma esta\xE7\xE3o. Seu avatar vai at\xE9 a bancada e abre os chamados daquele espa\xE7o. Todas as esta\xE7\xF5es est\xE3o dispon\xEDveis.</p><div class="map-list">${Wt.map(i=>`<button class="map-row" data-travel="${i.id}" style="--accent:${i.color};--soft:${i.soft}"><span>${xt(i.id)}</span><div><strong>${i.name}</strong><small>${i.desc} \xB7 ${Ws().filter(e=>e.level===i.id).length}/10</small></div><b>\u2197</b></button>`).join("")}<button class="map-row" data-mentor><span>\u2726</span><div><strong>Pra\xE7a central \xB7 Mentora Lia</strong><small>Aprenda o m\xE9todo de diagn\xF3stico.</small></div><b>\u2197</b></button></div>`,"map")}function rc(i){let e=ut.find(t=>t.id===Number(i));e&&(La=e.id,_i=e.id,In="",Hs=!1,Gt=null,qt?.teleport(Wt[e.level-1]),es(e),gn(),ts())}var $m=(i,e)=>i.map((t,n)=>({text:t,i:n,key:Math.sin((n+1)*97+e*31)})).sort((t,n)=>t.key-n.key);function ts(){let i=ut.find(r=>r.id===_i);if(!i)return;let e=es(i),t=gi(i),n=i.steps[t];if(e.stage===6){vn("Mais um problema resolvido.","ORDEM DE SERVI\xC7O "+xt(i.id)+" \xB7 MISS\xC3O CONCLU\xCDDA",`<div class="reward"><div class="reward-symbol" aria-hidden="true">\u{1F3C6}</div><span class="xp-reward">100 XP conquistados</span><h3>O laborat\xF3rio conta com voc\xEA.</h3><p>${St(i.title)}<br>Voc\xEA investigou, corrigiu e validou o resultado na simula\xE7\xE3o.</p><div class="summary-list"><p><strong>Evid\xEAncia e causa</strong>${St(n[0])}</p><p><strong>Corre\xE7\xE3o indicada</strong>${St(n[2])}</p><p><strong>Valida\xE7\xE3o</strong>${St(i.confirm)}</p></div><p>Revis\xF5es feitas: ${e.errors}. Cada nova tentativa tamb\xE9m \xE9 aprendizagem.</p><div class="actions"><button class="primary" data-next="${i.id}">Pr\xF3xima miss\xE3o \u2192</button><button class="secondary" data-explore>Voltar ao campus</button></div></div>`,"mission");return}let s="";if(e.stage===1)s=`<h3 class="stage-heading">A bancada \xE9 sua. Vamos investigar?</h3><p class="stage-desc">Execute os testes e compare os resultados simulados. A ordem \xE9 sua; mude uma vari\xE1vel por vez.</p><div class="choices">${i.steps.map((r,a)=>`<div><button class="test-card" data-test="${a}"><span class="letter">${e.tested.includes(a)?"\u2713":xt(a+1)}</span><span>${St(r[1])}</span></button>${e.tested.includes(a)?`<div class="test-result"><strong>${a===t?"EVID\xCANCIA ENCONTRADA":"HIP\xD3TESE DESCARTADA"}</strong>${St(a===t?`O teste identifica esta condi\xE7\xE3o no cen\xE1rio: ${r[0]}.`:"Resultado esperado nesta verifica\xE7\xE3o; essa hip\xF3tese n\xE3o explica a falha simulada. Investigue outra vari\xE1vel.")}</div>`:""}</div>`).join("")}</div><div class="actions"><button class="primary" data-investigation-next>Formular diagn\xF3stico \u2192</button></div>`;else{let r=["Antes de tocar, prepare o atendimento.","","Qual causa \xE9 sustentada pela evid\xEAncia?","Qual a\xE7\xE3o resolve a causa investigada?","O reparo funcionou? Demonstre.","Deixe uma boa passagem de servi\xE7o."],a=["Escolha o protocolo para uma interven\xE7\xE3o segura.","","Use o resultado dos testes. Sintomas parecidos podem ter causas diferentes.",`Causa identificada: ${n[0]}`,"Selecione o resultado que precisa ser verificado para encerrar o chamado.","Sua equipe precisa entender o que foi feito e os limites dessa conclus\xE3o."];s=`<h3 class="stage-heading">${r[e.stage]}</h3><p class="stage-desc">${St(a[e.stage])}</p>${e.stage>=2?`<div class="test-result"><strong>EVID\xCANCIA DA INVESTIGA\xC7\xC3O</strong>${St(n[0])}</div>`:""}<div class="choices">${$m(sc(i,e.stage),i.id+e.stage).map((o,l)=>`<button class="choice" data-choice="${o.i}"><span class="letter">${String.fromCharCode(65+l)}</span><span>${St(o.text)}</span></button>`).join("")}</div>`}vn(i.title,`OS ${xt(i.id)} \xB7 ESTA\xC7\xC3O ${xt(i.level)} \xB7 ${i.category}`,`<div class="mission-meta"><span>ETAPA ${e.stage+1} DE 6 \xB7 ${Qi[e.stage].toUpperCase()}</span><span>100 XP ao concluir \xB7 tentativas livres</span></div><div class="stage-track" aria-label="Etapa ${e.stage+1} de 6">${Qi.map((r,a)=>`<span class="${a<e.stage?"done":a===e.stage?"current":""}" title="${r}"></span>`).join("")}</div><p class="scenario">${St(i.symptom)}</p>${In?`<div class="feedback" role="status">${St(In)}</div>`:""}${s}${Hs?`<div class="note"><strong>Mentora Lia:</strong> ${St(e.stage<2?"Comece pelas verifica\xE7\xF5es simples. O teste "+xt(t+1)+" pode revelar uma pista decisiva.":e.stage===2?"Compare sua hip\xF3tese com esta condi\xE7\xE3o observada: "+n[0]:e.stage===3?"A a\xE7\xE3o deve corrigir exatamente a causa observada: "+n[0]:e.stage===4?"Compare com o crit\xE9rio de confirma\xE7\xE3o: "+i.confirm:"Outra equipe deve conseguir seguir o seu racioc\xEDnio.")}</div>`:""}<div class="mission-tools"><button data-hint>\u2726 Pedir uma pista \xE0 Lia</button><span>Etapas salvas automaticamente</span></div>${i.note?`<p class="note">Cuidado do caso: ${St(i.note)}</p>`:""}`,"mission")}function Zm(i){let e=ut.find(r=>r.id===_i);if(!e)return;let t=es(e),n=t.stage,s=mn(Fe);if(!cu(e,t,Number(i))){In=["Antes de agir, preserve os dados e garanta a supervis\xE3o. Abrir fonte ou trocar pe\xE7as sem isolar a causa n\xE3o ajuda o diagn\xF3stico.","","Releia a evid\xEAncia do teste. Procure a causa que corresponde \xE0 condi\xE7\xE3o observada.","A corre\xE7\xE3o precisa responder \xE0 causa isolada, sem alterar v\xE1rias vari\xE1veis por tentativa.","Uma troca de pe\xE7a n\xE3o comprova o reparo. Repita a tarefa e confira o resultado esperado.","Registre o caminho completo: sintoma, teste, causa, corre\xE7\xE3o e valida\xE7\xE3o."][n],gn(),ts();return}In="",gn(),t.stage===4&&ln("Corre\xE7\xE3o aplicada. Agora valide o funcionamento!"),t.stage===6&&(qt?.celebrate(),ln("Miss\xE3o conclu\xEDda! +100 XP. O campus est\xE1 voltando \xE0 vida."),$n.some(r=>r.xp>s&&r.xp<=mn(Fe))&&setTimeout(()=>ln("Nova cor de uniforme dispon\xEDvel em Meu avatar!"),1800)),ts(),ve("#panel").scrollTop=0}function cc(){vn("Observe antes de trocar.","MENTORA LIA \xB7 PRA\xC7A CENTRAL",`<p class="dialog-copy">\u201CUma pe\xE7a nova n\xE3o \xE9 um diagn\xF3stico. <strong>O melhor t\xE9cnico sabe transformar uma observa\xE7\xE3o em uma decis\xE3o.</strong> Eu vou ajudar voc\xEA a fazer isso.\u201D</p><div class="instruction-grid"><div class="instruction"><strong>1 \xB7 Uma vari\xE1vel</strong><p>Verifique uma hip\xF3tese de cada vez. Compare com algo que funciona.</p></div><div class="instruction"><strong>2 \xB7 Uma evid\xEAncia</strong><p>N\xE3o conclua s\xF3 pelo sintoma. Execute o teste e leia o resultado.</p></div><div class="instruction"><strong>3 \xB7 Uma valida\xE7\xE3o</strong><p>Repita a tarefa depois de corrigir. Registre o que demonstrou.</p></div></div><p class="note">${tc}</p><p class="dialog-copy">Os resultados s\xE3o did\xE1ticos, com uma causa designada por cen\xE1rio. A atividade n\xE3o faz diagn\xF3stico de computadores reais. XP indica seu percurso, e a avalia\xE7\xE3o final continua com o professor.</p><div class="actions"><button class="primary" data-list="1">Assumir meu primeiro chamado \u2192</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina e guia docente \u2197</a></div>`,"mentor")}function Gs(){let i=Ws();vn("Conhecimento que voc\xEA construiu.","MEU PERCURSO",`<div class="stats"><div class="stat"><strong>${mn(Fe)}</strong><span>XP de aprendizagem</span></div><div class="stat"><strong>${i.length}/50</strong><span>miss\xF5es conclu\xEDdas</span></div><div class="stat"><strong>${Object.values(Fe.records).filter(e=>e.stage<6).length}</strong><span>em investiga\xE7\xE3o</span></div></div><p class="dialog-copy">Seu registro \xE9 local e individual. Exporte para guardar uma c\xF3pia ou continuar em outro navegador. A importa\xE7\xE3o substitui este percurso ap\xF3s sua confirma\xE7\xE3o.</p><div class="actions"><button class="primary" data-export>Exportar progresso</button><button class="secondary" data-import>Importar progresso</button><button class="secondary" data-report>Baixar relat\xF3rio</button></div><p class="note">${ns?"Salvamento ativo neste navegador.":"O armazenamento n\xE3o est\xE1 dispon\xEDvel. Exporte seu progresso antes de fechar a p\xE1gina."} XP n\xE3o \xE9 nota nem certifica\xE7\xE3o de pr\xE1tica profissional.</p><div class="mission-list">${ut.filter(e=>Fe.records[e.id]).map(e=>`<button class="mission-row" data-case="${e.id}"><span class="mission-num">${Fe.records[e.id].stage===6?"\u2713":xt(e.id)}</span><div><strong>${St(e.title)}</strong><small>${Fe.records[e.id].stage===6?"Conclu\xEDdo na simula\xE7\xE3o":Qi[Fe.records[e.id].stage]} \xB7 ${Fe.records[e.id].errors} revis\xF5es</small></div><span>\u2197</span></button>`).join("")||'<p class="dialog-copy">Seu percurso come\xE7a com uma descoberta. Assuma seu primeiro chamado!</p>'}</div>`,"journal")}function lc(){let i=mn(Fe);vn("Seu jeito de explorar.","MEU AVATAR",`<p class="dialog-copy">Cada problema resolvido abre novas possibilidades. Escolha a cor do uniforme do seu avatar.</p><div class="wardrobe">${$n.map((e,t)=>`<button class="swatch ${Fe.skin===t?"chosen":""}" data-skin="${t}" ${i<e.xp?"disabled":""} aria-label="${e.name}, ${e.xp} XP necess\xE1rios" aria-pressed="${Fe.skin===t}"><i style="background:${e.color}"></i><span>${i<e.xp?e.xp+" XP":e.name}</span></button>`).join("")}</div><p class="note">Voc\xEA tem ${i} XP. As cores s\xE3o recompensas visuais; todas as miss\xF5es est\xE3o dispon\xEDveis desde o in\xEDcio.</p><div class="actions"><button class="primary" data-explore>Voltar ao campus \u2192</button></div>`,"avatar")}function Jm(){vn("Do seu jeito, no seu ritmo.","CONFIGURA\xC7\xD5ES",`<div class="settings-row"><div>Qualidade gr\xE1fica<small>Use o modo leve para poupar recursos no celular.</small></div><select id="quality"><option value="auto" ${Fe.quality==="auto"?"selected":""}>Autom\xE1tica</option><option value="low" ${Fe.quality==="low"?"selected":""}>Leve</option></select></div><p class="dialog-copy">Voc\xEA tamb\xE9m pode acessar todas as miss\xF5es pelos bot\xF5es, sem navegar pelo ambiente 3D. O jogo respeita a prefer\xEAncia do sistema por redu\xE7\xE3o de movimento.</p><div class="actions"><button class="secondary" data-list="0">Acessar miss\xF5es</button><button class="secondary" data-help>Como jogar</button><a class="secondary" href="oficina/" target="_blank" rel="noopener">Oficina com recursos de acessibilidade \u2197</a></div>`,"settings")}function gu(i,e,t){let n=URL.createObjectURL(new Blob([i],{type:t})),s=document.createElement("a");s.href=n,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}function Km(){gu(JSON.stringify({...Fe,format:"amc-mundo"},null,2),"operacao-bancada-progresso.json","application/json"),ln("Seu arquivo de progresso foi preparado.")}function jm(){let i=["# Opera\xE7\xE3o Bancada \xB7 Meu percurso",`${Ws().length}/50 miss\xF5es conclu\xEDdas na simula\xE7\xE3o. ${mn(Fe)} XP.`,"XP n\xE3o \xE9 nota. A execu\xE7\xE3o real exige observa\xE7\xE3o docente."];for(let e of ut){let t=Fe.records[e.id];if(t&&(i.push(`
## OS ${xt(e.id)} \xB7 ${e.title}`,`Situa\xE7\xE3o: ${t.stage===6?"conclu\xEDdo na simula\xE7\xE3o":Qi[t.stage]}. Revis\xF5es: ${t.errors}.`),t.stage===6)){let n=e.steps[gi(e)];i.push("Sintoma: "+e.symptom,"Teste: "+n[1],"Causa: "+n[0],"Corre\xE7\xE3o: "+n[2],"Valida\xE7\xE3o: "+e.confirm)}}gu(i.join(`

`),"operacao-bancada-percurso.md","text/markdown")}ve("#import-file").addEventListener("change",async i=>{let e=i.target.files[0];if(e){try{if(e.size>1e6)throw Error("Arquivo muito grande.");let t=JSON.parse(await e.text());if(t.format!=="amc-mundo")throw Error("Use um arquivo exportado por este jogo.");let n=ic(t);vn("Restaurar este percurso?","IMPORTAR PROGRESSO",`<p class="dialog-copy">O arquivo cont\xE9m <strong>${Object.values(n.records).filter(s=>s.stage===6).length} miss\xF5es conclu\xEDdas</strong> e ${mn(n)} XP. Ele substituir\xE1 o progresso atual deste navegador.</p><div class="actions"><button class="primary" id="confirm-import">Restaurar progresso</button><button class="secondary" data-journal>Cancelar</button></div>`,"import"),ve("#confirm-import").onclick=()=>{Fe=n,qt?.setSkin(),gn(),Gs(),ln("Percurso restaurado.")}}catch(t){ln("N\xE3o foi poss\xEDvel importar: "+t.message)}i.target.value=""}});function Qm(){let i=ve("#world"),e=new Ss;e.background=new We("#dce5ce"),e.fog=new Ms("#dce5ce",48,95);let t=new At(60,1,.1,140),n=new Ia({antialias:!0,alpha:!1,powerPreference:"low-power"});n.setPixelRatio(Math.min(devicePixelRatio,Fe.quality==="low"?1:1.7)),n.shadowMap.enabled=Fe.quality!=="low",n.shadowMap.type=Nr,n.outputColorSpace=Tt,n.setClearColor("#dce5ce"),i.appendChild(n.domElement);let s=new Pt;e.add(s),e.add(new Ds("#ffffed","#8a9b78",2.3));let r=new Us("#fff6db",3.2);r.position.set(-15,27,16),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-27,r.shadow.camera.right=27,r.shadow.camera.top=27,r.shadow.camera.bottom=-27,r.shadow.camera.far=75,r.shadow.normalBias=.04,r.shadow.bias=-2e-4,e.add(r);let a=new Map,o=new Map,l=(z,Z={})=>{let _=z+JSON.stringify(Z);return a.has(_)||a.set(_,new Rs({color:z,roughness:.88,...Z})),a.get(_)};function c(z,Z,_,m,R,F,W,k=s){let te=[z,Z,_].join(",");o.has(te)||o.set(te,new Gn(z,Z,_));let j=new gt(o.get(te),l(m));return j.position.set(R,F,W),j.castShadow=!0,j.receiveShadow=!0,k.add(j),j}function u(z,Z,_,m,R,F,W,k=12,te=s){let j=new gt(new Gi(z,Z,_,k),l(m));return j.position.set(R,F,W),j.castShadow=!0,j.receiveShadow=!0,te.add(j),j}function d(z,Z,_,m,R,F=s){let W=new gt(new Cs(z,0),l(Z));return W.position.set(_,m,R),W.castShadow=!0,W.receiveShadow=!0,F.add(W),W}function f(z,Z,_,m,R=4,F="#3e5b41",W=s){let k=document.createElement("canvas");k.width=640,k.height=144;let te=k.getContext("2d");te.fillStyle="#fafbe9",te.fillRect(0,0,640,144),te.fillStyle=F,te.font="bold 52px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText(z,320,75,600);let j=new bs(k);j.colorSpace=Tt;let pe=new gt(new ri(R,R*144/640),new Hn({map:j,side:Jt}));return pe.position.set(Z,_,m),W.add(pe),pe}c(36,1.4,31,"#a6b68a",0,-1.1,0),c(36.4,.5,31.4,"#bdcca0",0,-.25,0),c(35.8,.18,30.8,"#c9d9ab",0,.04,0),c(4.3,.05,27,"#e5dfc5",0,.16,-.2),c(29,.05,3.8,"#e5dfc5",0,.17,0),c(21,.04,3.3,"#e5dfc5",0,.17,7.1),u(4.1,4.1,.12,"#ebe5ce",0,.22,1.2,32),u(3.1,3.1,.03,"#d8dcb7",0,.3,1.2,32);let p=u(1.25,1.25,.04,"#eaf0da",0,.33,1.2,6);p.rotation.y=Math.PI/6,c(1.15,.06,.16,"#859a65",0,.37,1.2),c(.16,.06,1.15,"#859a65",0,.37,1.2);for(let z=-12;z<14;z+=1.4)c(.06,.02,.3,"#bfc6a9",1.72,.2,z);let v=[],S=[],g=[],h=[],T=[];function E(z,Z,_,m){v.push({x:z,z:Z,w:_/2+.28,d:m/2+.28})}function b(z,Z,_,m){c(1.55,.12,.8,"#dee2d5",z,1.58,Z,m),c(.12,.4,.12,"#5e6f65",z,1.8,Z+.12,m),c(.58,.06,.32,"#728276",z,1.65,Z+.1,m),c(1.35,.85,.12,"#52685b",z,2.2,Z,m);let R=c(1.2,.67,.025,_,z,2.2,Z+.075,m);c(1.02,.04,.32,"#f1f0df",z,1.7,Z+.55,m);for(let F=0;F<3;F++)c(.8,.012,.018,"#b7c2aa",z,1.728,Z+.47+F*.09,m);return c(.18,.06,.23,"#d4ddc8",z+.75,1.71,Z+.5,m),c(.55,.92,.72,"#f0efde",z+1.15,1.98,Z+.14,m),c(.42,.74,.03,"#d5ddc8",z+1.15,1.98,Z+.52,m),c(.04,.04,.03,"#a9d871",z+1.15,2.23,Z+.55,m),R}Wt.forEach((z,Z)=>{let _=new Pt;_.position.set(z.x,0,z.z),s.add(_),S.push(_),c(7.2,.22,5.7,"#e8eadb",0,.28,0,_),c(7.35,.12,5.85,z.color,0,.16,0,_),c(7.2,2.25,.2,"#eeeede",0,1.47,-2.7,_),c(7.4,.15,.4,z.color,0,2.62,-2.72,_),c(.18,1.5,3.4,"#e9eadb",-3.5,1.1,-1.2,_),c(.18,1.5,3.4,"#e9eadb",3.5,1.1,-1.2,_),E(z.x,z.z-2.7,7.2,.25),E(z.x-3.5,z.z-1.2,.2,3.4),E(z.x+3.5,z.z-1.2,.2,3.4),c(6.6,.2,1.65,"#b5a17c",0,1.48,-.85,_),c(6.7,.11,1.7,"#d3c5a4",0,1.61,-.85,_),[-2.7,2.7].forEach(te=>{c(.2,1.1,.2,"#8b9980",te,.85,-1.35,_),c(.2,1.1,.2,"#8b9980",te,.85,-.4,_)}),E(z.x,z.z-.85,6.6,1.65);let m=b(-1.7,-.95,"#a9be9d",_),R=b(1.35,-.95,"#a9be9d",_);g.push([m,R]),c(.8,.18,.75,"#8a9d72",-.95,.77,.75,_),c(.7,.8,.12,"#9caf87",-.95,1.15,1.08,_),c(.15,.42,.15,"#64795e",-.95,.5,.75,_),f(xt(Z+1)+"  /  "+["CONEX\xD5ES","CONFIGURA\xC7\xD5ES","SISTEMA & DADOS","HARDWARE","DIAGN\xD3STICO"][Z],0,2.18,-2.56,5.5,z.color,_),c(.9,1.9,.55,"#a7b593",-2.85,1.25,-1.9,_);for(let te=0;te<3;te++)c(.85,.08,.55,"#e8e8d3",-2.85,.65+te*.55,-1.88,_),c(.25,.3,.32,[z.color,"#c5bf9c","#c8d4b6"][te],-2.85,.84+te*.55,-1.85,_);let F=new Pt;F.position.set(0,3.55,-1),_.add(F);let W=c(.46,.46,.46,z.color,0,0,0,F);W.rotation.z=Math.PI/4,W.rotation.x=Math.PI/4,h.push(F);let k=c(7,.02,5.5,z.color,0,.43,0,_);k.visible=!1,T.push({type:"station",id:z.id,group:_,hit:k})});function C(z,Z,_=1){let m=new Pt;m.position.set(z,0,Z),m.scale.setScalar(_),s.add(m),u(.18,.26,2.7,"#a4946e",0,1.4,0,7,m),d(1.35,"#9cb57b",0,3.15,0,m),d(1.05,"#aec68a",-.65,3.45,.1,m),d(.95,"#b8ce92",.5,4,.1,m),E(z,Z,.7,.7)}[[-15,-11,1],[-12,-12,.75],[14,-11,1.1],[16,-7,.8],[-16,0,.9],[16,2,1],[-14,9,.95],[-11,12,.7],[13,11,.9],[16,10,.65],[-3,-13,.6],[5,-13,.7]].forEach(z=>C(...z));function A(z,Z){u(.8,.9,.4,"#c0c4a3",z,.35,Z,8),d(.7,"#9eb47c",z,.8,Z),d(.45,"#acc487",z+.45,.75,Z+.12)}[[-14,-3],[14,-3],[-11,3],[11,3],[-3,12],[3,12],[-5,-11],[5,-11]].forEach(z=>A(...z));function P(z,Z){u(.09,.12,3.6,"#8b9c7d",z,1.9,Z,6),c(.55,.45,.55,"#f5f1cd",z,3.7,Z),c(.65,.12,.65,"#8e9c7d",z,3.99,Z)}[[-4,1],[4,1],[-13,-7],[13,-7],[-11,8],[11,8]].forEach(z=>P(...z));function L(z,Z){c(2.5,.14,.65,"#bca17a",z,.8,Z),c(2.5,.65,.1,"#c8ae83",z,1.25,Z-.3),[-.85,.85].forEach(_=>c(.12,.6,.4,"#7f9172",z+_,.43,Z)),E(z,Z,2.5,.7)}L(-5,2),L(5,2),L(-12,4),L(12,4),c(.3,3.7,.3,"#738a61",-2,1.98,12),c(.3,3.7,.3,"#738a61",2,1.98,12),c(4.8,.8,.24,"#f2f0d7",0,3.6,12),f("CAMPUS AMC",0,3.62,12.15,4.4,"#587348");for(let z=0;z<22;z++){let Z=Math.sin(z*13.1)*16,_=Math.cos(z*6.3)*13;if(!(Math.abs(Z)<3||Math.abs(_)<2))for(let m=0;m<3;m++)u(.07,.1,.3,"#9cb478",Z+m*.15,.28,_+m*.13,4)}function M(z="#647e4c",Z="#cda078",_="#4a4233"){let m=new Pt,R=c(.78,.8,.4,z,0,1.18,0,m);c(.67,.67,.63,Z,0,1.94,0,m),c(.7,.2,.66,_,0,2.32,-.025,m),c(.7,.3,.2,_,0,2.17,-.28,m),c(.12,.18,.2,_,-.3,2.12,.22,m);let F=[];for(let k of[-1,1]){let te=new Pt;te.position.set(k*.56,1.55,0),m.add(te),c(.28,.38,.32,z,0,-.18,0,te),c(.26,.38,.3,Z,0,-.53,0,te);let j=new Pt;j.position.set(k*.21,.8,0),m.add(j),c(.32,.65,.34,"#48554b",0,-.32,0,j),c(.36,.16,.48,"#eee9d6",0,-.66,.06,j),F.push(te,j)}for(let k of[-1,1])c(.065,.065,.025,"#3e3a2e",k*.15,1.97,.325,m);c(.13,.025,.025,"#825b44",0,1.8,.325,m),c(.2,.14,.02,"#e5e6c8",.2,1.35,.211,m);let W=new gt(new As(.65,18),new Hn({color:"#62794f",transparent:!0,opacity:.13,depthWrite:!1}));return W.rotation.x=-Math.PI/2,W.position.y=.22,m.add(W),{group:m,torso:R,limbs:F}}let y=[];s.traverse(z=>{if(!(!z.isMesh||!z.visible)){for(let Z=z.parent;Z;Z=Z.parent)if(h.includes(Z))return;y.push(z)}}),s.updateMatrixWorld(!0);let I=new Da(t,y),U=M($n[Fe.skin].color);U.group.name="student-avatar",U.group.position.set(0,.12,7),U.group.rotation.y=Math.PI,s.add(U.group);let G=M("#d3a66f","#b9835d","#4b3c31");G.group.position.set(-1.8,.12,3),G.group.rotation.y=.3,s.add(G.group),f("LIA \xB7 MENTORA",-1.8,3.1,3,2.8,"#7a8257");let X=new gt(new ws(.17,.35,4),l("#f8ffb6"));X.position.set(0,3,0),X.rotation.z=Math.PI,U.group.add(X);let J=[];for(let z=0;z<22;z++){let Z=c(.12,.12,.12,["#d2e996","#f4d58a","#9fc6bc"][z%3],0,-10,0);J.push({mesh:Z,v:new B,life:0})}let Y=ve("#station-labels");Y.innerHTML=Wt.map(z=>`<span class="station-label" id="label-${z.id}" style="--accent:${z.color}"><b>${xt(z.id)}</b>${z.short}</span>`).join("");let ae=1,q=1;function le(){ae=Math.max(1,i.clientWidth),q=Math.max(1,i.clientHeight),n.setSize(ae,q),t.aspect=ae/q,t.fov=t.aspect<.9?68:60,t.updateProjectionMatrix()}new ResizeObserver(le).observe(i),le();let ge=new Set,ze={x:0,y:0},Ke=!1,Qe=0,$e=performance.now(),K=!0,ee=matchMedia("(prefers-reduced-motion: reduce)").matches,xe;function Le(){ze={x:0,y:0},ve("#joystick-knob").style.transform=""}function Se(){ge.clear(),Le(),xe?.cancel()}addEventListener("keydown",z=>{if(ve("#panel").open||/INPUT|SELECT|TEXTAREA/.test(z.target.tagName))return;let Z=z.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","e","m","r"].includes(Z)&&z.preventDefault(),Z==="e"&&!z.repeat?uc():Z==="m"&&!z.repeat?oc():Z==="r"&&!z.repeat?I.recenter(U.group.rotation.y):ge.add(Z)}),addEventListener("keyup",z=>ge.delete(z.key.toLowerCase())),addEventListener("blur",Se),document.addEventListener("visibilitychange",()=>{K=!document.hidden,Se(),$e=performance.now()}),ve("#panel").addEventListener("close",Se);let Ve=ve("#joystick"),ft=null;function w(z){let Z=Ve.getBoundingClientRect(),_=z.clientX-Z.left-Z.width/2,m=z.clientY-Z.top-Z.height/2,R=Math.hypot(_,m),F=R>32?32/R:1;ze={x:_*F/32,y:m*F/32},ve("#joystick-knob").style.transform=`translate(${_*F}px,${m*F}px)`,Gt=null}Ve.addEventListener("pointerdown",z=>{ft=z.pointerId,Ve.setPointerCapture(z.pointerId),w(z)}),Ve.addEventListener("pointermove",z=>{z.pointerId===ft&&w(z)});for(let z of["pointerup","pointercancel","lostpointercapture"])Ve.addEventListener(z,()=>{ft=null,Le()});let nt=new oi,Ne=new Ge;xe=ru(n.domElement,I,{blocked:()=>ve("#panel").open,onTap(z,Z){let _=n.domElement.getBoundingClientRect();if(!_.width||!_.height)return;Ne.set((z-_.left)/_.width*2-1,-(Z-_.top)/_.height*2+1),nt.setFromCamera(Ne,t);let m=nt.intersectObjects(S,!0).find(R=>R.object.visible);if(m){let R=Wt.find((F,W)=>{let k=m.object;for(;k;){if(k===S[W])return!0;k=k.parent}return!1});R&&vu(R.id)}}}),ve("#camera-center").onclick=()=>I.recenter(U.group.rotation.y);function Ce(z,Z){return Math.abs(z)>17.2||Math.abs(Z)>14.2?!0:v.some(_=>Math.abs(z-_.x)<_.w&&Math.abs(Z-_.z)<_.d)}function be(z,Z,_=null){let te=se=>({x:-16.8+se%57*.6,z:-13.8+Math.floor(se/57)*.6}),j=(se,Q)=>Math.max(0,Math.min(56,Math.round((se- -16.8)/.6)))+57*Math.max(0,Math.min(46,Math.round((Q- -13.8)/.6))),pe=se=>{let Q=te(se);return!Ce(Q.x,Q.z)},Te=se=>{if(pe(se))return se;for(let Q=1;Q<7;Q++)for(let $=-Q;$<=Q;$++)for(let he=-Q;he<=Q;he++){let Ae=se%57+he,Ye=Math.floor(se/57)+$;if(Ae>=0&&Ae<57&&Ye>=0&&Ye<47&&pe(Ae+Ye*57))return Ae+Ye*57}return se},ne=Te(j(U.group.position.x,U.group.position.z)),ue=Te(j(z,Z)),Re=se=>{let Q=te(se),$=te(ue);return Math.hypot(Q.x-$.x,Q.z-$.z)},ye=[ne],ce=new Map([[ne,0]]),Oe=new Map,D=new Set,ie=!1;for(;ye.length;){ye.sort((he,Ae)=>ce.get(he)+Re(he)-(ce.get(Ae)+Re(Ae)));let se=ye.shift();if(se===ue){ie=!0;break}D.add(se);let Q=se%57,$=Math.floor(se/57);for(let he=-1;he<=1;he++)for(let Ae=-1;Ae<=1;Ae++){if(!Ae&&!he)continue;let Ye=Q+Ae,Ze=$+he;if(Ye<0||Ye>=57||Ze<0||Ze>=47)continue;let Mt=Ye+Ze*57;if(D.has(Mt)||!pe(Mt)||Ae&&he&&(!pe(Q+Ae+$*57)||!pe(Q+($+he)*57)))continue;let Ft=ce.get(se)+.6*(Ae&&he?Math.SQRT2:1);Ft<(ce.get(Mt)??1/0)&&(Oe.set(Mt,se),ce.set(Mt,Ft),ye.includes(Mt)||ye.push(Mt))}}if(!ie){ln("Escolha a esta\xE7\xE3o pelo menu de miss\xF5es para assumir a bancada.");return}let oe=[];for(let se=ue;se!==ne;se=Oe.get(se))oe.unshift(te(se));oe.push(Ce(z,Z)?te(ue):{x:z,z:Z}),Gt={x:z,z:Z,id:_,route:oe}}function it(z,Z,_){let m=U.group.position,R=_*5.3,F=m.x+z*R,W=m.z+Z*R;if(Ce(F,m.z)||(m.x=F),Ce(m.x,W)||(m.z=W),Ke=Math.abs(z)+Math.abs(Z)>.06,Ke){let te=Math.atan2(z,Z)-U.group.rotation.y;te=Math.atan2(Math.sin(te),Math.cos(te)),U.group.rotation.y+=te*Math.min(1,_*14)}}function Me(){Wt.forEach((z,Z)=>{let _=Ws().filter(R=>R.level===z.id).length,m=La&&ut[La-1].level===z.id&&Fe.records[La]?.stage>=4;g[Z].forEach((R,F)=>R.material=l(_>F*5||m?"#bada8b":"#9db3a4",{emissive:_||m?"#496931":"#294035",emissiveIntensity:.12}))})}function Be(z){requestAnimationFrame(Be);let Z=Math.min((z-$e)/1e3,.045);if($e=z,!K)return;if(Qe+=Z,Ke=!1,!ve("#panel").open){let R=(ge.has("d")||ge.has("arrowright")?1:0)-(ge.has("a")||ge.has("arrowleft")?1:0)+ze.x,F=(ge.has("s")||ge.has("arrowdown")?1:0)-(ge.has("w")||ge.has("arrowup")?1:0)+ze.y;if(Math.abs(R)+Math.abs(F)>.08){Gt=null;let W=Math.max(1,Math.hypot(R,F));R/=W,F/=W;let k=I.movement(R,F);it(k.x,k.z,Z)}else if(Gt){let W=Gt.route[0]||Gt,k=W.x-U.group.position.x,te=W.z-U.group.position.z,j=Math.hypot(k,te);if(j<.04){if(Gt.route.length&&Gt.route.shift(),!Gt.route.length){let pe=Gt;Gt=null,pe.id?is(pe.id):cc()}}else it(k/j,te/j,Math.min(Z,j/5.3))}}U.limbs.forEach((R,F)=>R.rotation.x=Ke&&!ee?Math.sin(Qe*11+(F<2?0:Math.PI))*.45*(F%2?1:-1):0),U.group.position.y=.12+(Ke&&!ee?Math.abs(Math.sin(Qe*11))*.045:0),X.position.y=3+(ee?0:Math.sin(Qe*2)*.08),h.forEach((R,F)=>{R.position.y=3.55+(ee?0:Math.sin(Qe*1.8+F)*.12),ee||(R.rotation.y=Qe*.6)});let _=U.group.position;Nt=null;let m=1/0;for(let R of Wt){let F=Math.hypot(_.x-R.x,_.z-(R.z+1.7));F<3.9&&F<m&&(Nt={type:"station",id:R.id},m=F)}Math.hypot(_.x+1.8,_.z-3)<2.1&&(Nt={type:"mentor"}),ve("#interact").hidden=!Nt,ve("#interact span").textContent=Nt?.type==="mentor"?"Conversar com Lia":Nt?`Explorar esta\xE7\xE3o ${xt(Nt.id)}`:"Explorar bancada",ve("#mobile-interact").style.opacity=Nt?"1":".45",ve("#location-name").textContent=Nt?.type==="station"?Wt[Nt.id-1].name:Nt?"Pra\xE7a \xB7 Mentora Lia":"Pra\xE7a central",I.update(_,Z,{reducedMotion:ee});for(let R of Wt){let F=new B(R.x,4.2,R.z-1.1).project(t),W=ve("#label-"+R.id);W.style.left=`${(F.x*.5+.5)*ae}px`,W.style.top=`${(-F.y*.5+.5)*q}px`,W.style.opacity=F.z>-1&&F.z<1&&Math.abs(F.x)<.95&&Math.abs(F.y)<.85?"1":"0"}J.forEach(R=>{R.life<=0||(R.life-=Z,R.mesh.visible=R.life>0,R.mesh.position.addScaledVector(R.v,Z),R.v.y-=Z*5,R.mesh.rotation.x+=Z*3)}),n.render(e,t)}return requestAnimationFrame(Be),ve("#loading").hidden=!0,ve("#loading").style.display="none",Me(),{refresh:Me,navigate:be,teleport(z){Se(),U.group.position.set(z.x,.12,z.z+2.1),U.group.rotation.y=Math.PI,I.recenter(Math.PI),I.update(U.group.position,0,{snap:!0})},home(){Se(),Gt=null,U.group.position.set(0,.12,7),U.group.rotation.y=Math.PI,I.recenter(Math.PI),I.update(U.group.position,0,{snap:!0})},setSkin(){U.torso.material=l($n[Fe.skin].color),U.limbs.filter((z,Z)=>Z%2===0).forEach(z=>z.children[0].material=l($n[Fe.skin].color))},quality(){n.setPixelRatio(Math.min(devicePixelRatio,Fe.quality==="low"?1:1.7)),n.shadowMap.enabled=Fe.quality!=="low",le()},celebrate(){J.forEach(z=>{z.life=2,z.mesh.visible=!0,z.mesh.position.copy(U.group.position).add(new B(0,2.8,0)),z.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5)})}}}function vu(i){let e=Wt.find(t=>t.id===Number(i));if(e){if(xi(),!qt){is(e.id);return}qt.navigate(e.x,e.z+2.2,e.id),ln("A caminho da esta\xE7\xE3o "+xt(e.id)+". Voc\xEA tamb\xE9m pode usar WASD ou o controle virtual.")}}function uc(){ve("#panel").open||(Nt?.type==="mentor"?cc():Nt?is(Nt.id):ln("Aproxime-se de uma bancada ou escolha uma esta\xE7\xE3o no mapa."))}document.addEventListener("click",i=>{let e=i.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if("list"in t)is(Number(t.list));else if("case"in t)rc(t.case);else if("choice"in t)Zm(t.choice);else if("test"in t){let n=ut[_i-1];lu(n,es(n),Number(t.test)),In="",gn(),ts()}else if("investigationNext"in t){let n=ut[_i-1];uu(n,es(n))?In="":In="Ainda falta uma evid\xEAncia que explique a falha. Execute outras verifica\xE7\xF5es ou pe\xE7a uma pista \xE0 Lia.",gn(),ts()}else if("hint"in t)es(ut[_i-1]).hints++,Hs=!Hs,gn(),ts();else if("next"in t){let n=ut.find(s=>s.id>Number(t.next)&&Fe.records[s.id]?.stage!==6)||ut.find(s=>Fe.records[s.id]?.stage!==6);n?rc(n.id):Gs()}else if("travel"in t)vu(t.travel);else if("start"in t)Fe.tutorial=!0,gn(),xi(),ln("Bem-vindo! Toque em uma esta\xE7\xE3o ou mova seu avatar pelo campus.");else if("explore"in t)xi();else if("export"in t)Km();else if("import"in t)ve("#import-file").click();else if("report"in t)jm();else if("journal"in t)Gs();else if("skin"in t){let n=Number(t.skin);$n[n]?.xp<=mn(Fe)&&(Fe.skin=n,qt?.setSkin(),gn(),lc())}else"help"in t?ac():"mentor"in t&&(xi(),qt?qt.navigate(-1.5,4.2):cc())});ve("#world-nav").onclick=()=>{xi(),ve("#world").scrollIntoView({behavior:"smooth",block:"center"})};ve("#missions-nav").onclick=()=>is(0);ve("#journal-nav").onclick=Gs;ve("#avatar-nav").onclick=lc;ve("#map-button").onclick=oc;ve("#all-missions").onclick=()=>is(0);ve("#help").onclick=ac;ve("#settings").onclick=Jm;ve("#camera-reset").onclick=()=>{qt?.home(),ln("Voc\xEA voltou \xE0 pra\xE7a central.")};ve("#interact").onclick=uc;ve("#mobile-interact").onclick=uc;ve("#quest-go").onclick=()=>{let i=ut.find(e=>Fe.records[e.id]&&Fe.records[e.id].stage<6)||ut.find(e=>Fe.records[e.id]?.stage!==6);i?rc(i.id):Gs()};document.addEventListener("change",i=>{i.target.id==="quality"&&(Fe.quality=i.target.value,qt?.quality(),gn())});var Ua=document.createElement("nav");Ua.className="mobile-toolbar";Ua.setAttribute("aria-label","Navega\xE7\xE3o m\xF3vel");Ua.innerHTML=`<button id="mobile-map">${vi("map")}Campus</button><button data-list="0">${vi("flag")}Miss\xF5es</button><button data-journal>${vi("book")}Percurso</button><button id="mobile-avatar">${vi("user")}Avatar</button>`;document.body.append(Ua);ve("#mobile-map")?.addEventListener("click",oc);ve("#mobile-avatar")?.addEventListener("click",lc);fu();mu();try{qt=Qm()}catch(i){console.error("Mundo 3D indispon\xEDvel:",i),ve("#loading").style.display="none",ve("#world").innerHTML='<div id="world-fallback"><strong>Seu navegador n\xE3o disponibilizou o ambiente 3D.</strong><p>Todas as 50 miss\xF5es continuam dispon\xEDveis para jogar pelos bot\xF5es abaixo.</p><button class="primary" data-list="0">Abrir miss\xF5es</button></div>',ve("#station-labels").hidden=!0}Fe.tutorial||setTimeout(ac,650);
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
