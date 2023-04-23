import { useParticleMaterial } from './shaders/particles';
import { useEffect, useMemo, useRef } from 'react';
import { InstancedBufferAttribute, InstancedBufferGeometry, InstancedMesh, Object3D } from 'three/src/Three';
import { GroupProps, useFrame } from '@react-three/fiber';
import { positions } from './utils/constants';
import { useDarkMode } from 'usehooks-ts';

const COUNT = 500;
const X_RANGE = 100;
const Z_RANGE = 15;
const XZ_POW = 1.2;
const Y_RANGE = 9;
const Y_POW = 2;
const SCALE = 10;

export default function AmbientParticles(props: GroupProps) {
  const mesh = useRef<InstancedMesh>(null);
  const { isDarkMode } = useDarkMode();
  const darkModeInterpolationConstant = { value: 0 };

  const particleMaterial = useParticleMaterial();

  const dummy = useMemo(() => new Object3D(), []);
  const generate = false;

  useEffect(() => {
    if (!particleMaterial) return;
    if (isDarkMode) {
      gsap.to(darkModeInterpolationConstant, { value: 1, duration: 2 });
    } else {
      gsap.to(darkModeInterpolationConstant, { value: 0, duration: 2 });
    }
    // particleMaterial.uniforms.isDarkMode.value = isDarkMode ? 1 : 0;
  }, [isDarkMode]);

  useEffect(() => {
    if (!mesh.current) return;

    const seeds = new Float32Array(COUNT);
    let newPositions = '';

    for (let i = 0; i < COUNT; i++) {
      const rx = positions[3 * i];
      const ry = positions[3 * i + 1];
      const rz = positions[3 * i + 2];

      if (generate) {
        newPositions += `${rx}, `;
        newPositions += `${ry}, `;
        newPositions += `${rz}, `;
      }

      const x = rx * X_RANGE;
      const z = rz * Z_RANGE;
      const y = ry * Y_RANGE;
      dummy.position.fromArray([x, y, z]);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
      seeds[i] = 0.5;
    }

    mesh.current.instanceMatrix.needsUpdate = true;

    generate && console.log(newPositions);

    (mesh.current.geometry as InstancedBufferGeometry).setAttribute(
      'seed',
      new InstancedBufferAttribute(seeds, 1, false, COUNT)
    );
  }, [COUNT, mesh]);

  useFrame(({ clock }) => {
    if (!particleMaterial) return;
    particleMaterial.uniforms.time.value = clock.getElapsedTime() * 0.4;
    particleMaterial.uniforms.isDarkMode.value = darkModeInterpolationConstant.value;
    // console.log(particleMaterial.uniforms.isDarkMode.value);
    // particleMaterial.uniforms.isDarkMode.value = isDarkMode ? 1 : 0;
  });

  return (
    <group name="ambient-particles" {...props}>
      <group>
        {/* @ts-ignore */}
        <instancedMesh
          // @ts-ignore
          ref={mesh}
          args={[undefined, undefined, COUNT]}
          material={particleMaterial}
        >
          <sphereGeometry args={[0.015 * SCALE, 16, 20]} />
        </instancedMesh>
      </group>
    </group>
  );
}
