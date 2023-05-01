/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/staging/cloudOne/cloudOne.glb  --types --keepnames --shadows --transform --simplify
*/

import { useControls } from 'leva';
import { nanoid } from "nanoid";
import type { Mesh, MeshStandardMaterial } from 'three';
import type { GLTF } from 'three-stdlib';

import { Instances,useGLTF } from '@react-three/drei';

import { generateInstancedModelData } from '~/utils/canvas';

import InstancedCloud from './InstancedCloud';

type GLTFResult = GLTF & {
  nodes: {
    cloudZero: Mesh;
    cloudOne: Mesh;
    cloudTwo: Mesh;
    loudThree: Mesh;
    cloudFour: Mesh;
  };
  materials: {
    aiStandardSurface1SG: MeshStandardMaterial;
  };
};

const FILE_URL = 'https://dqeczc7c9n9n1.cloudfront.net/models/clouds-1682761806/clouds-transformed.glb.gz';
const CLOUD_TYPES = 5;
const SCALE_CONSTRAINTS = [10, 1.75, 0.1]
const SCALE_VARIANCE = 0.0075;

export default function Clouds(props: JSX.IntrinsicElements['group']) {
  const range = useControls({ clouds: { value: 50, min: 10, max: 100, step: 10 } });
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  const geometryIndexMap = ['cloudOne', 'cloudTwo', 'cloudThree', 'cloudFour', 'cloudZero'];

  // 5 Different Cloud Variations
  const cloudVariants = Array.from({ length: CLOUD_TYPES }, () => generateInstancedModelData(range.clouds / CLOUD_TYPES, SCALE_CONSTRAINTS, SCALE_VARIANCE));

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading, react/no-unknown-property
    <group {...props} dispose={null}>
      {cloudVariants.map((cloudVariant, index) => (
        <Instances
          range={range.clouds / CLOUD_TYPES}
          material={materials.aiStandardSurface1SG}
          key={nanoid()}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          geometry={nodes[geometryIndexMap[`${index}`]]!.geometry}
        >
          <group>
            {cloudVariant.map((instancedData) => (
              <InstancedCloud key={nanoid()} position={instancedData.position} scale={instancedData.scale} />
            ))}
          </group>
        </Instances>
      ))}
    </group>
  );
}

useGLTF.preload(FILE_URL);
