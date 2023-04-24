import { Vector3 } from 'three';

function randomPositionVector(constraint: number | [number, number, number]) {
  if (typeof constraint === 'number') {
    return new Vector3(
      constraint / 2 - Math.random() * constraint,
      constraint / 2 - Math.random() * constraint,
      constraint / 2 - Math.random() * constraint
    );
  } 
    return new Vector3(
      constraint[0] / 2 - Math.random() * constraint[0],
      constraint[1] / 2 - Math.random() * constraint[1],
      constraint[2] / 2 - Math.random() * constraint[2]
    );
  
}

export function generateInstancedModelData(
  count: number,
  constraint: number | number[],
  scaleVariance = 0,
  scaleMultiplier = 1
) {
  const data = Array.from({ length: count }, () => ({
      position: randomPositionVector(constraint),
      scale: scaleMultiplier + Math.random() * scaleVariance,
      // color: [Math.random(), Math.random(), Math.random(), 1],
    }));
  return data;
}
