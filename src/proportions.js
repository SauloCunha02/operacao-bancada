// Unidades próprias do jogo, compartilhadas pelo enquadramento, piso e colisões.
export const CAMPUS_SCALE={bodyRadius:.5,deskTop:1.665,wallTop:3.76,walkSpeed:5.3};
export function floorHeight(x,z,stations){
  if(stations.some(s=>Math.abs(x-s.x)<=3.6&&Math.abs(z-s.z)<=2.85))return .39;
  const plaza=Math.hypot(x,z-1.2);
  if(plaza<=1.25)return .39;
  if(plaza<=3.1)return .315;
  if(plaza<=4.1)return .28;
  if(Math.abs(x)<=2.15&&z>=-13.7&&z<=13.3)return .195;
  if(Math.abs(x)<=14.5&&Math.abs(z)<=1.9)return .195;
  if(Math.abs(x)<=10.5&&Math.abs(z-7.1)<=1.65)return .19;
  return .13;
}
