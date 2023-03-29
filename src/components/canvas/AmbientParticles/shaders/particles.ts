import { useMemo } from 'react';
import { ShaderMaterial, ShaderMaterialParameters, Uniform } from 'three';

import vert from './particle.vert';
import frag from './particle.frag';

export const useParticleMaterial = (shaderParams?: Partial<ShaderMaterialParameters>) => {
  return useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: new Uniform(0),
          color: new Uniform({ r: 0, g: 0, b: 0 }),
          fogColor: new Uniform({ r: 1, g: 1, b: 1 }),
          fogNear: new Uniform(1.0),
          fogFar: new Uniform(10),
        },
        vertexShader: vert,
        fragmentShader: frag,
        ...shaderParams,
      }),
    [frag, vert]
  );
};
