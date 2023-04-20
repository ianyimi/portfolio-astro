import { Vector3 } from 'three';

function randomPositionVector(constraint: number | [number, number, number]) {
  if (typeof constraint === 'number') {
    return new Vector3(
      constraint / 2 - Math.random() * constraint,
      constraint / 2 - Math.random() * constraint,
      constraint / 2 - Math.random() * constraint
    );
  } else {
    return new Vector3(
      constraint[0] / 2 - Math.random() * constraint[0],
      constraint[1] / 2 - Math.random() * constraint[1],
      constraint[2] / 2 - Math.random() * constraint[2]
    );
  }
}

export function generateInstancedModelData(
  count: number,
  constraint: number | [number, number, number],
  scaleVariance?: number
) {
  const data = Array.from({ length: count }, () => {
    return {
      position: randomPositionVector(constraint),
      // color: [Math.random(), Math.random(), Math.random(), 1],
      scale: scaleVariance ? Math.random() * (0.5 + scaleVariance) + 0.5 : 1,
    };
  });
  return data;
}
