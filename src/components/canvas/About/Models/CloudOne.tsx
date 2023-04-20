/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/staging/cloudOne/cloudOne.glb  --types --keepnames --shadows --transform --simplify
*/

import type { Mesh, MeshStandardMaterial, Group } from 'three';
import { MathUtils, Vector3 } from 'three';
import { useControls } from 'leva';
import { useGLTF, Instances, Instance } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import { generateInstancedModelData } from '~/utils/canvas';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    cloudZero: Mesh;
    cloudOne: Mesh;
    cloudTwo: Mesh;
    CloudThree: Mesh;
    cloudFour: Mesh;
  };
  materials: {
    aiStandardSurface1SG: MeshStandardMaterial;
  };
};

const FILE_URL = 'https://dqeczc7c9n9n1.cloudfront.net/models/clouds-1681977951/clouds.glb';
const RESPAWN_CUTOFF = 5;

export default function Models(props: JSX.IntrinsicElements['group']) {
  const range = useControls({ clouds: { value: 50, min: 10, max: 100, step: 10 } });
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  const data = generateInstancedModelData(range.clouds, [10, 1.75, 0.1], 0.01);
  const cloudVariants = useRef<
    {
      position: Vector3;
      scale: number;
    }[][]
  >(new Array(5).fill([]));
  useEffect(() => {
    data.forEach((instance, i) => {
      cloudVariants.current[i % 5].push({ position: instance.position, scale: instance.scale });
    });
    console.log(cloudVariants.current);
  }, []);

  return (
    <group {...props} dispose={null}>
      <Instances
        range={range.clouds / cloudVariants.current.length}
        material={materials.aiStandardSurface1SG}
        geometry={nodes.cloudOne.geometry}
      >
        <group>
          {cloudVariants.current[0].map((props, i) => (
            <InstancedModel key={i} {...props} />
          ))}
        </group>
      </Instances>
      {/* <Instances
        range={range.clouds / cloudVariants.current.length}
        material={materials.aiStandardSurface1SG}
        geometry={nodes.cloudTwo.geometry}
      >
        <group>
          {data.map((props, i) => (
            <InstancedModel key={i} {...props} />
          ))}
        </group>
      </Instances>
      <Instances
        range={range.clouds / cloudVariants.current.length}
        material={materials.aiStandardSurface1SG}
        geometry={nodes.CloudThree.geometry}
      >
        <group>
          {data.map((props, i) => (
            <InstancedModel key={i} {...props} />
          ))}
        </group>
      </Instances>
      <Instances
        range={range.clouds / cloudVariants.current.length}
        material={materials.aiStandardSurface1SG}
        geometry={nodes.cloudFour.geometry}
      >
        <group>
          {data.map((props, i) => (
            <InstancedModel key={i} {...props} />
          ))}
        </group>
      </Instances>
      <Instances
        range={range.clouds / cloudVariants.current.length}
        material={materials.aiStandardSurface1SG}
        geometry={nodes.cloudZero.geometry}
      >
        <group>
          {data.map((props, i) => (
            <InstancedModel key={i} {...props} />
          ))}
        </group>
      </Instances> */}
    </group>
  );
}

function InstancedModel(props: { scale: number } & JSX.IntrinsicElements['group']) {
  const ref = useRef<Group>();
  const currentWorldPosition = useRef(new Vector3());
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.getWorldPosition(currentWorldPosition.current);
    //   const t = state.clock.getElapsedTime() + random * 10000
    //   ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
    //   ref.current.position.y = Math.sin(t / 1.5) / 2
    if (currentWorldPosition.current.x > RESPAWN_CUTOFF) {
      // console.log('reset');
      ref.current.scale.multiplyScalar(0);
      ref.current.position.x -= 400 - 1 / props.scale;
      gsap.to(ref.current.scale, { x: 1, y: 1, z: 1, duration: 2, ease: 'elastic.out(1, 0.3)' });
    } else {
      ref.current.position.x += 0.075 / props.scale;
    }
    ref.current.scale.x =
      ref.current.scale.y =
      ref.current.scale.z =
        MathUtils.lerp(ref.current.scale.z, hovered ? 1.25 : 1, 0.1);
    //   ref.current.color.lerp(color.set(hovered ? 'red' : 'white'), hovered ? 1 : 0.1)
  });
  return (
    <group {...props}>
      <group scale={0.025 * (props.scale ?? 1)}>
        <Instance
          ref={ref}
          onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
          onPointerOut={(e) => setHover(false)}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);